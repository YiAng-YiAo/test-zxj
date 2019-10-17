package.cpath=package.cpath..";../?.dll;./?.dll;.\\?.dll;./tool/?.dll;"
require ("lfs")

--print(lc.help())

FIX_RANGE = 50 --range一次性加载会报错，只能分段加载
CUR_DIR = lfs.currentdir()

TOOL_PATH = string.gsub(arg[0], "(.*[\\/])(.+)", "%1")
PATH_CONFIG_FILE = "脚本导出路径配置.conf"

OUTPUT_SERVER = "../output/server" -- 读取脚本获得，输出配置的根目录,如果未找到配置就在默认目录里
OUTPUT_CLIENT = "../output/client" -- 读取脚本获得，输出配置的根目录,如果未找到配置就在默认目录里
OUTPUT_CLIENT_DEF = "../output/client_def"

--参数定义位置
TYPE_DEFINE = "B1"
FILE_PATH_DEFINE = "B2"
FILE_HEAD_DEFINE = "E1"
FILE_TAIL_DEFINE = "E2"
KEYS_DEFINE = "B3"

--数据行定义
EXCEL_FLAG_LINE = 6 --导出标识行数
EXCEL_FIELD_LINE = 7 --字段名定义行数
EXCEL_DATA_LINE = 8--数据开始行数
EXCEL_START_COLUMN = 2 --第一列保留为数据记录的备注

--特殊方式读取的行列定义
VERTICAL_FLAG_COLUMN = 2 --竖向导出
VERTICAL_FIELD_COLUMN = 3 --竖向导出
VERTICAL_DATA_COLUMN = 4 --竖向导出
VERTICAL_START_LINE = 6 --tiny方式导出开始行
VERTICAL_FLAG_DEFINE = "B"
VERTICAL_FIELD_DEFINE = "C"
VERTICAL_DATA_DEFINE = "D"


function excel2Lua(excelFile)
	lfs.chdir(TOOL_PATH)	--切换到pathconfig文件的路径，也就是本文件路径 同时保证luacom正确加载
	require ("luacom")	--确保加载的是同一级目录的那个
	require ("lc")
	--加载配置文件里的路径
	dofile(U2A(PATH_CONFIG_FILE))

	--初始化导出根目录
	if server_data_path ~= nil then OUTPUT_SERVER = server_data_path end
	if client_data_path ~= nil then 
		OUTPUT_CLIENT = client_data_path 
		OUTPUT_CLIENT_DEF = client_data_path
		if OUTPUT_CLIENT_DEF[-1] == "/" or OUTPUT_CLIENT_DEF[-1] == "\\" then 
			OUTPUT_CLIENT_DEF = string.sub(OUTPUT_CLIENT_DEF, 1, -2) 
		end
		OUTPUT_CLIENT_DEF = OUTPUT_CLIENT_DEF.."_def/"
	end

	print(U2A("输出目录:"))
	print(OUTPUT_SERVER)
	print(OUTPUT_CLIENT)
	if OUTPUT_SERVER[-1] ~="/" then OUTPUT_SERVER = OUTPUT_SERVER .. "/"end
	if OUTPUT_CLIENT[-1] ~="/" then OUTPUT_CLIENT = OUTPUT_CLIENT .. "/"end

	--打开表格文件
	local iExcel = luacom.CreateObject("Excel.Application")

	print("open.."..excelFile)
	iExcel.WorkBooks:Open(excelFile, nil, 0)

	readExcel(iExcel)

	iExcel.Application:Quit()
end




-- ****************************************************************** --
function readExcel(iExcel)
	for i = 1, iExcel.Worksheets.Count do
		local iSheet = iExcel.Worksheets(i)
		local rule = readDefine(iSheet)
		readSheet(iSheet, rule)
	end
end

--[[
rule = {
	type= "base"
	filePath,
	fileName,
	fileType,
	fileHead,
	fileTail,
	keys,
	fieldIndex,
	fieldCount,
}
fieldIndex = {
	[column] = {name, flag}
}
dataTable
--]]

--去掉字符串两端的空格
function string.trim(s)
	 return (string.gsub(s, "^%s*(.-)%s*$", "%1"))
end

--字符串分割函数
--传入字符串和分隔符，返回分割后的table
function string.split(str, delimiter, depth)
	if str==nil or str=='' or delimiter==nil then
		return nil
	end
	
    local result = {}
	local lastStr = nil
    for match in (str..delimiter):gmatch("(.-)"..delimiter) do
		if depth and depth <= #result then
			if not lastStr then lastStr = "" end
			lastStr = lastStr..match
		else
			table.insert(result, string.trim(match))
		end
    end
	if lastStr then table.insert(result, string.trim(lastStr)) end
    return result
end

function output_default_file(rule)
	local rval = {}
	for _,vv in pairs(rule.fieldIndex) do
		if vv.def then
			table.insert(rval, "\""..tostring(vv.name).."\":"..tostring(vv.def))
		end
	end
	
	local file_str = "{\n" .. table.concat(rval, ",\n") .. "\n}"
	local outputFolder = OUTPUT_CLIENT_DEF
	outputFolder = string.gsub(outputFolder, '/', '\\')
	os.execute("if not exist "..outputFolder.." mkdir "..outputFolder) --再创建新的
	lfs.chdir(outputFolder)	
	
	local tt = string.split(tostring(rule.fileHead), "=")
	local file = io.open(tt[1]..".json", "w")
	if #rval > 0 then
		if file == nil then print("open failed: "..tt[1]..".json") return end
		file:write(A2U(file_str))
		file:close()
	else
		file:close()
		os.remove(tt[1]..".json")
	end
end

function readDefine(iSheet)
	local rule = {}
	rule.type = iSheet:Range(TYPE_DEFINE).Value2
	rule.filePath = iSheet:Range(FILE_PATH_DEFINE).Value2
	rule.fileHead = iSheet:Range(FILE_HEAD_DEFINE).Value2
	rule.fileTail = iSheet:Range(FILE_TAIL_DEFINE).Value2
	rule.keyCount = iSheet:Range(KEYS_DEFINE).Value2
	rule.keyCount = tonumber(rule.keyCount) or 0

	if (not rule.type or not rule.keyCount or not rule.filePath) then
		return nil
	end
	rule.fileName = string.gsub(rule.filePath, "(.*[\\/])(.+)([\.].+)", "%2")
	rule.fileType = string.gsub(rule.filePath, "(.*[\\/])(.+[\.])(.+)", "%3") 
	rule.filePath = string.gsub(rule.filePath, "(.*[\\/])(.+)", "%1") 
	rule.fieldIndex = {}
	rule.fieldCount = 0
	local usedrange = iSheet.UsedRange
	if isVertical(rule) then
		local max = usedrange.Rows.Count
		local row,range = 1,{}
		while row <= max do
			table.insert(range, usedrange:Range(VERTICAL_FLAG_DEFINE..row..":"..VERTICAL_FIELD_DEFINE..math.min(row-1+FIX_RANGE,max)).Value2)
			row = row + FIX_RANGE
		end

		for row = VERTICAL_START_LINE, max do
			local flagValue = range[math.floor((row-1)/FIX_RANGE)+1][(row-1)%FIX_RANGE+1][1]
			local field = range[math.floor((row-1)/FIX_RANGE)+1][(row-1)%FIX_RANGE+1][2]
			if flagValue ~= nil then
				if field ~= nil then
					local df = string.split(field, "=", 1)
					rule.fieldIndex[row] = {name = df[1], def = df[2], flag = flagValue, key=((row-VERTICAL_START_LINE)<rule.keyCount)}
				else
					rule.fieldIndex[row] = {name = field, flag = flagValue, key=((row-VERTICAL_START_LINE)<rule.keyCount)}
				end
				rule.fieldCount = rule.fieldCount + 1
			end
		end
	else
		local max = usedrange.Columns.Count
		local col,range = 1,{}
		while col <= max do
			table.insert(range, usedrange:Range(n2c(col)..EXCEL_FLAG_LINE..":"..n2c(math.min(col-1+FIX_RANGE, max))..EXCEL_FIELD_LINE).Value2)
			col = col + FIX_RANGE
		end

		for column = EXCEL_START_COLUMN, max do
			local flagValue = range[math.floor((column-1)/FIX_RANGE)+1][1][(column-1)%FIX_RANGE+1]
			local field = range[math.floor((column-1)/FIX_RANGE)+1][2][(column-1)%FIX_RANGE+1]
			if field ~= nil then
				local df = string.split(field, "=", 1)
				rule.fieldIndex[column] = {name = df[1], def = df[2], flag = flagValue, key=((column-EXCEL_START_COLUMN)<rule.keyCount)}
				rule.fieldCount = rule.fieldCount + 1
			end
		end 
	end
	output_default_file(rule)
	return rule
end

function readSheet(iSheet, rule)
	if rule == nil then return end

	print(U2A("\n开始读取 ")..iSheet.name)
	rule.sheet_name = iSheet.name
	local dataTableServer = {}
	local dataTableClient = {}
	local indent = rule.keyCount
	if indent == 0 or rule.type == "line" then indent = 1 end

	local readline = 0
	io.write("\n")
	local usedrange = iSheet.UsedRange

	local maxCount = isVertical(rule) and usedrange.Columns.Count or usedrange.Rows.Count
	--local range = getRange(usedrange, 1, maxCount, rule)
	local range = getRange(usedrange, usedrange.Rows.Count, rule)
	local start = isVertical(rule) and VERTICAL_DATA_COLUMN or EXCEL_DATA_LINE

	for current = start, maxCount do
		if current % 10 == 0 and (not isVertical(rule)) then
			io.write(U2A("\r正在解析第"..current.."行"))
		end
		--if current % FIX_RANGE == 1 then
		--	range = getRange(usedrange, current, maxCount, rule)
		--end
		local dataServer = {}
		local dataClient = {}

		--读取keys字段
		local keys = {}
		local index = (current-1) % FIX_RANGE + 1

		for pos, field in pairs(rule.fieldIndex) do
			--local data = isVertical(rule) and range[pos-VERTICAL_START_LINE+1][pos] or range[index][pos]
			local data = isVertical(rule) and range[math.floor((pos-1)/FIX_RANGE)+1][(pos-1)%FIX_RANGE+1][1] or range[math.floor((current-1)/FIX_RANGE)+1][index][pos]
			--此处能识别number,boolean,string(table)
			--if data~= nil and Format(data) == "" then
			--	print(current.."行,"..tostring(field.name)..": data("..data..") is not true")
			--end
			if data ~= nil and Format(data) ~= "" then
				if field.key then
					table.insert(keys, data)
				end
				if field.name == nil then
					data = Format(data)..",\n"
				else
					data = tabs(indent)..tostring(field.name).." = "..Format(data)..",\n"
				end

			end
			if string.find(field.flag or "", "s") ~= nil then
				dataServer[#dataServer + 1] = data
			end
			if string.find(field.flag or "", "c") ~= nil then
				dataClient[#dataClient + 1] = data
			end
		end

		if #keys ~= rule.keyCount then break end
		if #dataServer == 0 and #dataClient == 0 then break end

		--转换格式
		local datastrS = table.concat(dataServer, '')
		local datastrC = table.concat(dataClient, '')

		datastrS = A2U(datastrS)
		datastrC = A2U(datastrC)

		readline = readline + 1
		cacheData(dataTableServer, datastrS, keys)
		cacheData(dataTableClient, datastrC, keys)
	end
	if not isVertical(rule) then
		print(U2A("\r总计读取"..readline.."行数据"))
	else
		print(U2A("\r总计读取"..rule.fieldCount.."行数据"))
	end
	io.write(U2A("\n开始写server文件."))

	if output(dataTableServer, rule, OUTPUT_SERVER) then
		print("\r"..iSheet.name..U2A("导出server完成!"))
	end
	io.write(U2A("开始写client文件."))
	if output(dataTableClient, rule, OUTPUT_CLIENT) then
		print("\r"..iSheet.name..U2A("导出client完成!"))
	end
end

function n2c(n) 
    return n==0 and "" or n2c(math.floor((n-1)/26))..string.char((n-1)%26+65)
end

function isVertical(rule)
	return rule.type == "tiny"
end

function getRange(usedrange, maxCount, rule)
	--[[if not isVertical(rule) then
		return usedrange.Rows(tostring(pos)..":"..math.min(pos - 1 + FIX_RANGE, maxCount)).Value2
	else
		--返回拆分形式的数组
		--return usedrange.Columns(n2c(pos)..":"..n2c(math.min(pos-1+FIX_RANGE, maxCount))).Value2
		local row = FIX_RANGE
		local ret = {}
		while row <= usedrange.Rows.Count do
			table.insert(ret, usedrange.Range("D"))
		end
		usedrange:Range("D:D"..usedrange.Rows.Count).Value2
		return ret
	end
	--]]

	local ret = {}

	local row = 1
	while row <= maxCount do
		if not isVertical(rule) then
			table.insert(ret, usedrange.Rows(tostring(row)..":"..math.min(row-1+FIX_RANGE, maxCount)).Value2)
		else
			local t = usedrange:Range(VERTICAL_DATA_DEFINE..row..":"..VERTICAL_DATA_DEFINE..math.min(row-1+FIX_RANGE, maxCount)).Value2
			if type(t) == "table" then
				table.insert(ret, t)
			else
				table.insert(ret, {t})
			end
			--table.insert(ret, usedrange:Range(VERTICAL_DATA_DEFINE..row..":"..VERTICAL_DATA_DEFINE..math.min(row-1+FIX_RANGE, maxCount)).Value2)
		end
		row = row + FIX_RANGE
	end
	return ret
end

function cacheData(dataTable, datastr, keys)
	if datastr == nil then return end
	if #keys == 0 then
		table.insert(dataTable, datastr)
	else
		local t = dataTable
		for i = 1, #keys-1 do
			if t[keys[i]] == nil then t[keys[i]] = {} end
			t = t[keys[i]]
		end
		t[keys[#keys]] = datastr
	end
	dataTable.dataCount = (dataTable.dataCount or 0) + 1
end

--获取文件名  
function strippath(filename)  
    return string.match(filename, ".+/([^/]*%.%w+)$") -- *nix system  
    --return string.match(filename, “.+\\([^\\]*%.%w+)$”) — *nix system  
end 

function output(dataTable, rule, outputPath)
	if dataTable.dataCount == nil then return end
	dataTable.dataCount = nil
	local outputFolder = outputPath..U2A(tostring(rule.filePath))
	outputFolder = string.gsub(outputFolder, '/', '\\')
	os.execute("if not exist "..outputFolder.." mkdir "..outputFolder) --再创建新的
	lfs.chdir(outputFolder)
	--print(outputFolder)


	local keys = {}
	local indent = 0

	if rule.fileHead ~= nil then rule.fileHead = rule.fileHead .. "\n"
	else rule.fileHead = "" end

	if rule.type == "base" or rule.type == "line" then
		local filedata
		if rule.type == "line" then
			os.execute("mkdir "..rule.fileName)
			filedata = table.concat(outputLine(dataTable, keys, rule), '')
		else
			filedata = table.concat(outputBase(dataTable, rule, indent), '')
		end
		filedata = rule.fileHead..filedata..rule.fileTail

		local file = io.open(rule.fileName.."."..rule.fileType, "w")
		if file == nil then print("open failed: "..rule.fileName.."."..rule.fileType) return end
		file:write(A2U("--"..strippath(arg[1]).." "..rule.sheet_name.."\n")..filedata)
		file:close()
	elseif rule.type == "tiny" then
		if #dataTable == 0 then print(U2A("数据为空")) return end
		local filedata = rule.fileHead..dataTable[1]..rule.fileTail

		local file = io.open(rule.fileName.."."..rule.fileType, "w")
		if file == nil then print("open failed: "..rule.fileName.."."..rule.fileType) return end
		file:write(A2U("--"..strippath(arg[1]).." "..rule.sheet_name.."\n")..filedata)
		file:close()
	end

	return true
end

function outputTableHead(indent, rule, k)
	if rule.keyCount == nil or rule.keyCount == 0 then
		return tabs(indent).."{\n"
	else
		return tabs(indent).."["..k.."] = {\n"
	end
end

function outputBase(dataTable, rule, indent, data)
	if data == nil then data = {} end
	local all_keys = {}
	for k, _ in pairs(dataTable) do
		table.insert(all_keys, k)
	end
	table.sort(all_keys)
	for _, k in pairs(all_keys) do
	--for k, v in pairs(dataTable) do
		local v = dataTable[k]
		data[#data + 1] = outputTableHead(indent, rule, k)
		if type(v) == "table" then
			data = outputBase(v, rule, indent+1, data)
		else
			data[#data+1] = v
		end
		data[#data+1] = (tabs(indent).."},\n")
	end
	return data
end

function outputLine(dataTable, keys, rule, data)
	if data == nil then data = {} end
	for k, v in pairs(dataTable) do
		if type(v) == "table" then
			table.insert(keys, k)
			data = outputLine(v, keys, rule, data)
			table.remove(keys)
		else
			local filepath = rule.fileName.."\\"..rule.fileName
			for _,index in ipairs(keys) do filepath = filepath.."_"..index end
			filepath = filepath.."_"..k..".data"

			data[#data+1] = '--#include "'..filepath..'"\n'
			local datafile = io.open(filepath, "w")
			if datafile == nil then print("open failed: "..filepath) return end
			datafile:write("{\n"..v.."},\n")
			datafile:close()
		end
	end
	return data
end


--输出制表符
function tabs(count)
	local str = ""
	for i = 1, count do
		str = str..'\t'
	end
	return str
end

function A2U(str)
	str = lc.a2u(str)
	if str == nil then return nil end
	str = string.sub(str, 1, string.len(str) - 1)
	return str
end

function U2A(str)
	str = lc.u2a(str)
	if str == nil then return nil end
	str = string.sub(str, 1, string.len(str) - 1)
	return str
end

function Format(data)
	--[[local str = ""
	if type(data) == "string" and string.find(data, "{") == nil then
		str = '"'..data..'"'
	else
		str = tostring(data)
	end
	--]]
	return tostring(data)
end

--执行脚本
excel2Lua(arg[1])
lfs.chdir(CUR_DIR)	--还原到执行时的路径 使bat能继续执行别的脚本

--os.execute("pause")


