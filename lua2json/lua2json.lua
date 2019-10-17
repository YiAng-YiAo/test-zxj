-----------------------------------------------------------------------------
-- Imports and dependencies  
-----------------------------------------------------------------------------
local math = require('math')
local string = require("string")
local table = require("table")

local base = _G



-- Private functions  
local encodeString
local isArray
local isEncodable

-----------------------------------------------------------------------------
-- PUBLIC FUNCTIONS  
-----------------------------------------------------------------------------
--- Encodes an arbitrary Lua object / variable.  
-- @param v The Lua object / variable to be JSON encoded.  
-- @return String containing the JSON encoding in internal Lua string format (i.e. not unicode)  
function encode(v, first)
	-- Handle nil values
	if v == nil then
		return "null"
	end

	local vtype = base.type(v)

	-- Handle strings
	if vtype == 'string' then
		return '"' .. encodeString(v) .. '"' -- Need to handle encoding in string
	end

	-- Handle booleans
	if vtype == 'number' or vtype == 'boolean' then
		return base.tostring(v)
	end

	-- Handle tables
	if vtype == 'table' then
		local rval = {}
		-- Consider arrays separately
		local bArray, maxCount = isArray(v, first)
		
		if bArray then
			for i = 1, maxCount do
				table.insert(rval, encode(v[i]))
			end
		else -- An object, not an array
			for i, j in base.pairs(v) do
				if isEncodable(i) and isEncodable(j) then
					table.insert(rval, '"' .. encodeString(i) .. '":' .. encode(j, (type(tonumber(i))=="number") and first))
				end
			end
		end
		if bArray then
			return '[\n' .. table.concat(rval, ',\n') .. '\n]\n'
		else
			return '{' .. table.concat(rval, ',\n') .. '}\n'
		end
	end

	-- Handle null values
	if vtype == 'function' and v == null then
		return 'null'
	end

	base.assert(false, 'encode attempt to encode unsupported type ' .. vtype .. ':' .. base.tostring(v))
end



--- Encodes a string to be JSON-compatible.  
-- This just involves back-quoting inverted commas, back-quotes and newlines, I think ;-)  
-- @param s The string to return as a JSON encoded (i.e. backquoted string)  
-- @return The string appropriately escaped.  

local escapeList = {
	['"'] = '\\"',
	['\\'] = '\\\\',
	['/'] = '\\/',
	['\b'] = '\\b',
	['\f'] = '\\f',
	['\n'] = '\\n',
	['\r'] = '\\r',
	['\t'] = '\\t'
}

function encodeString(s)
	if base.type(s) == "number" then
		s = base.tostring(s)
	end
	return s:gsub(".", function(c) return escapeList[c] end) -- SoniEx2: 5.0 compat  
end

-- Determines whether the given Lua type is an array or a table / dictionary.  
-- We consider any table an array if it has indexes 1..n for its n items, and no  
-- other data in the table.  
-- I think this method is currently a little 'flaky', but can't think of a good way around it yet...  
-- @param t The table to evaluate as an array  
-- @return boolean, number True if the table can be represented as an array, false otherwise. If true,  
-- the second returned value is the maximum  
-- number of indexed elements in the array.   
function isArray(t, first)
	--[[return false--]]
	-- Next we count all the elements, ensuring that any non-indexed elements are not-encodable
	-- (with the possible exception of 'n')
	if (first) then
		first = false
		return false
	end

	local maxIndex = 0
	local nk = 1
	for k, v in base.pairs(t) do
		if (base.type(k) == 'number' and math.floor(k) == k and nk == k) then -- k,v is an indexed pair
			if (not isEncodable(v)) then return false end -- All array elements must be encodable
			nk = nk + 1
			maxIndex = math.max(maxIndex, k)
		else
			if (k == 'n') then
				if v ~= table.getn(t) then return false end -- False if n does not hold the number of elements
			else -- Else of (k=='n')
				if isEncodable(v) then return false end
			end -- End of (k~='n')
		end -- End of k,v not an indexed pair
	end -- End of loop across all pairs
	return true, maxIndex
end

--- Determines whether the given Lua object / table / variable can be JSON encoded. The only  
-- types that are JSON encodable are: string, boolean, number, nil, table and json.null.  
-- In this implementation, all other types are ignored.  
-- @param o The object to examine.  
-- @return boolean True if the object should be JSON encoded, false if it should be ignored.  
function isEncodable(o)
	local t = base.type(o)
	return (t == 'string' or t == 'boolean' or t == 'number' or t == 'nil' or t == 'table') or (t == 'function' and o == null)
end


--上面是json库的代码


function include(path)
	--print(lfs.currentdir())
	local f = io.lines(path, "*L")
	--local dir = string.gsub(path, "(.*[\\/])(%a+\.%a+)", "%1")
	--print("######-------  "..dir)
	local line = f()
	local content = {}
	while (line) do
		if string.find(line, "--#include") then
			local l = string.gsub(line, "(--#include).*\"(.+)\".*", "%2")
			--print("------#######   ".. line)
			--print("------#######   "..l)
			--print("------#######   "..dir..l)
			--line = openFile(dir..l)
			line = openFile(l)
		end
		table.insert(content, line)
		table.insert(content, '\n')
		line = f()
	end
	local ret = table.concat(content)
	--会出现连续2个逗号
	if ret == nil or ret == "" then ret = "nil" end

	return ret
end

require("lfs")

local rootpath = lfs.currentdir()

function openFile(path)
	local cur = lfs.currentdir()
	-- print("openFile:" .. cur)

	local dir = string.gsub(path, "(.*[\\/])(%a+\.%a+)$", "%1")
	local file = string.gsub(path, "(.*[\\/])(%a+\.%a+)$", "%2")

	lfs.chdir(dir)

	-- print("chdir and include:" .. dir .. " " .. file)
	s = include(file)
	lfs.chdir(cur)
	return s
end

function t2s(t, blank)
	if t == nil then return "nil" end
	local ret = "{\n"
	local b = (blank or 0) + 1
	local function tabs(n)
		local s = ""
		for i = 1, n do
			s = s .. '\t'
		end
		return s
	end

	for k, v in pairs(t) do
		if type(k) == "string" then
			ret = ret .. tabs(b) .. k .. "="
		else
			ret = ret .. tabs(b) .. "[" .. k .. "] = "
		end

		if type(v) == "table" then
			ret = ret .. t2s(v, b) .. ",\n"
		elseif type(v) == "string" then
			ret = ret .. '"' .. v .. '",\n'
		else
			ret = ret .. tostring(v) .. ",\n"
		end
	end

	ret = ret .. tabs(b - 1) .. "}"
	return ret
end

local BaseType =
{
	["number"] = 1,
	["string"] = 1,
	["boolean"] = 1,
	["any"] = 1,
}

local function first(tb, key)
	for k, v in pairs(tb) do
		if key == nil or tostring(k) == key then
			return v
		end
	end
end

local function isbasetype(val)
	local type = type(val)
	return BaseType[type]
end

local function debug_print() 
end

local function isList(tb)
	local t = type(tb)
	if t ~= "table" then return false end

	local n = table.getn(tb)
	if n ~= 0 then
		return true
	elseif first(tb) == nil then
		-- blank table
		return true
	elseif type(first(tb)) == "table" then
		return true
	end

	return false
end

function ex(luaFile, className, nowClassName,fp, requireFile, params)
	luaFileTemp = luaFile .. ".temp"
	--jsonFile = string.gsub(luaFile, "(.*[\\/])(%a+\.%a+)$", "%2")..".json"


	if requireFile ~= nil and requireFile ~= "" then
		local r = openFile(requireFile)
		f = io.open("temp.lua", "w")
		f:write(r)
		f:close()
		dofile("temp.lua")
		--assert(loadstring(r.." return nil"))()
	end
	print("openfile.." .. luaFile)
	local s = openFile(luaFile)
	print("openfile.." .. luaFile)
	--[[
		f = io.open("temp.lua", "w")
		f:write(s)
		f:close()
		dofile("temp.lua")
		local tb = _G[className]
		--]]
	dofile(luaFile)
	local tb = loadstring(s .. " return " .. className)()

	if type(tb) == "table" then
		local first = true
		local j = encode(tb, first)
		--f = io.open(outputPath..jsonFile, "w")
		fp:write('"' .. nowClassName .. '":\n' .. j) --key值
		print("convert successed")

		--createConfigFile(tb, className, nil, params)
	else
		print("convert failed")
		local f = io.open(luaFileTemp, "w+")
		f:write(s);

		f:close();
	end
end


configFile = "configZ.txt"
local fp = io.open("config.json", "w")
if fp == nil then print("创建文件失败") return end
fp:write("{\n")
dofile(configFile)
lfs.chdir(luaPath)

local isFirst = false
for _, file in ipairs(luaFiles) do
	if isFirst == true then
		fp:write(",")
	else
		isFirst = true
	end
	print(file[1], file[2], file[3])
	ex(file[1], file[2],file[3], fp, langFile, file[4])
end
fp:write("}")
fp:close()

os.execute("pause")
