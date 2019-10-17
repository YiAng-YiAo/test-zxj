require "lfs"


EXCEL_DATA_START_ROW = 8
EXCEL_DATA_START_COL = 2

local path = arg[1]
print(path)

local currentPath = lfs.currentdir()
local scriptPath = string.gsub(arg[0], "(.*[\\/])(.+)", "%1")		
lfs.chdir(scriptPath)
require('luacom')
require "lc"
lfs.chdir(currentPath)


fields = {}
fieldsCount = 0

function fieldIndex(name)
	if fields[name] == nil then
		fieldsCount = fieldsCount + 1
		fields[name] = fieldsCount
	end
	return fields[name]
end

function main(path)
	local file, err = io.open(path, "r")
	--单个文件
	if file then
		local data = file:read("*a")
		file:close()
		data = preProcess(data)

		local fileData = assert(loadstring("local fileData = { "..data.."} return fileData"))()
		local dataTable = {}

		if #fileData == 0 then return end
		for i, f in ipairs(fileData) do
			local data = {}
			for k,v in pairs(f) do
				if type(v) == "table" then
					v = serialize(v)
				else
					v = tostring(v)
				end
				data[fieldIndex(k)] = v 
			end
			table.insert(dataTable, data)
		end
		local filename = string.gsub(path, "(.*[\\/])(.+)([\.].+)", "%2")
		local outputPath = string.gsub(path, "(.*[\\/])(.+)([\.].+)", "%1")
		output(filename, dataTable, outputPath)
	else
		local files = {}
		for file in lfs.dir(path) do
			if file ~= "." and file ~= ".." then
				table.insert(files, file)
			end
		end
		if #files == 0 then
			print(U2A("输入路径有误"))
			return
		end
		--多个文件
		local dataTable = {}
		for i,file in ipairs(files) do
			print("-------------------"..file.."--------------")
			--获取文件名
			local fileIndex = string.gsub(file, "(.*)([\.].+)", "%1")
			fileIndex = tonumber(fileIndex) 
			if fileIndex then --排除xxxSample
				local f, err = io.open(path.."\\"..file, "r")
				if err then print(err) return end

				local data = f:read("*a")
				f:close()
				data = preProcess(data)

				local fileData = assert(loadstring("local fileData = { "..data.."} return fileData[1]"))()
				data = {}
				data[fieldIndex("id")] = fileIndex --文件编号作为key

				for k, v in pairs(fileData) do
					if type(v) == "table" then
						v = serialize(v)
					else
						v = tostring(v)
					end
					data[fieldIndex(k)] = v		
				end
				table.insert(dataTable, data)
			end
		end
		local filename = string.gsub(path, "(.*[\\/])(.+)", "%2")
		local outputPath = string.gsub(path, "(.*[\\/])(.+)", "%1")
		output(filename, dataTable, outputPath)
	end

end

function preProcess(data)
	data = U2A(data)
	data = string.gsub(data, "?", "")
	data = string.gsub(data, "(Lang.-)[,]", "\"%1\",")
	return data
end

function postProcess(data)
	for i = 1, fieldsCount do
		if data[i] == nil then
			data[i] = ""
		end
	end
	return data
end

function U2A(str)
	local out = lc.u2a(str)
	out = string.sub(str, 1, string.len(str) -1)
	return out
end

function n2c(n) 
    return n==0 and "" or n2c(math.floor((n-1)/26))..string.char((n-1)%26+65)
end

function output(filename, dataTable, outputPath)
	local excel = luacom.CreateObject("Excel.Application")
	excel.Visible = false
	print("outputing: "..filename)

	local book = excel.Workbooks:Add()
	local sheet = book.Sheets(1)
	book:SaveAs(outputPath..filename..".xlsx")

	--标题
	local title = {} 
	for name, index in pairs(fields) do
		title[index] = name
	end
	sheet:Range("B7:"..n2c(fieldsCount+1).."7").Value2 = {title}

	--内容
	local c = #dataTable
	local endCol = n2c(fieldsCount+1)
	for i,v in ipairs(dataTable) do
		v = postProcess(v)
		local row = tostring(7+i)
		sheet:Range("B"..row..":"..endCol..row).Value2 = {v}
	end
	--sheet:Range("B8:"..n2c(fieldsCount+1)..tostring(7+#dataTable)).Value2 = dataTable --整块写入 --太大可能会出问题到时候再改吧

	excel.DisplayAlerts = false
	excel:Save()
	excel:Quit()
end
--保存数据用转换方式
function serialize(t)
    local ret = {"{"}
    for k, v in ipairs(t) do
    	if type(v) == "table" then
    		table.insert(ret, serialize(v)..",")
    	elseif type(v) == "string" then
    		table.insert(ret, '"'..v..'",')
    	else
    		table.insert(ret, tostring(v)..",")
    	end
    end
    for k, v in pairs(t) do
    	if type(k) == "string" then
    		table.insert(ret, k.."=")

    		if type(v) == "table" then
    			table.insert(ret, serialize(v)..",")
    		elseif type(v) == "string" then
    			table.insert(ret, '"'..v..'",')
    		else
    			table.insert(ret, tostring(v)..",")
    		end
    	end
    end

    table.insert(ret, '}')
    return table.concat(ret, "")
end

main(path)
os.execute("pause")