module("systems.platformactivity.auditing", package.seeall)
setfenv(1, systems.platformactivity.auditing)

--审核服功能

AuditingEquipConfig = 
{
	{
		{level = 20,  items = {121003,121103,121203}},
		{level = 30 , items = {121004,121104,121204}},
		{level = 40 , items = {121005,121105,121205}},
		{level = 50 , items = {121006,121106,121206}},
		{level = 60 , items = {121007,121107,121207}},
		{level = 70 , items = {121008,121108,121208}},
		{level = 80 , items = {121009,121109,121209}},
		{level = 90 , items = {121010,121110,121210}},
		{level = 100 , items = {121011,121111,121211}},
		{level = 110, items = {121012,121112,121212}},
	},
	{
		{level = 20,  items = {122003,122103,122203}},
		{level = 30 , items = {122004,122104,122204}},
		{level = 40 , items = {122005,122105,122205}},
		{level = 50 , items = {122006,122106,122206}},
		{level = 60 , items = {122007,122107,122207}},
		{level = 70 , items = {122008,122108,122208}},
		{level = 80 , items = {122009,122109,122209}},
		{level = 90 , items = {122010,122110,122210}},
		{level = 100 , items = {122011,122111,122211}},
		{level = 110, items = {122012,122112,122212}},

	},
    {
		{level = 20,  items = {123003,123103,123203}},
		{level = 30 , items = {123004,123104,123204}},
		{level = 40 , items = {123005,123105,123205}},
		{level = 50 , items = {123006,123106,123206}},
		{level = 60 , items = {123007,123107,123207}},
		{level = 70 , items = {123008,123108,123208}},
		{level = 80 , items = {123009,123109,123209}},
		{level = 90 , items = {123010,123110,123210}},
		{level = 100 , items = {123011,123111,123211}},
		{level = 110, items = {123012,123112,123212}},

	},
}
	

function  SetAuditingData(actor)
	local serverid = System.getServerId()
	local level = LActor.getLevel(actor)
	if 	serverid == 1501 and level <= 1 then
		local rand = System.getRandomNumber(80) + 20
		local data = getChapterData(actor)
		data.level = rand
		LActor.setChapterLevel(actor, data.level)
		actorevent.onEvent(actor, aeChapterLevelFinish, rand)
		local var = LActor.getStaticVar(actor)
		var.AuditingLevel = rand
		return rand
	end
	return 0
end

function getChapterData(actor)
	local var = LActor.getStaticVar(actor)
	if var == nil then return nil end
	if var.chapterData == nil then
		var.chapterData = {}
		var.chapterData.level = 1
		LActor.setChapterLevel(actor, 1)  
	end
	return var.chapterData
end

local function onLogin(actor)
	local var = LActor.getStaticVar(actor)
	local level = var.AuditingLevel or 0 
	local job = LActor.getJob(actor)
	if level > 0 then
		LActor.setLevel(actor, level)
		LActor.onLevelUp(actor)
		LActor.sendBaseData(actor)
		actorevent.onEvent(actor, aeLevel, level)
		local cfg = AuditingEquipConfig[job]
		if cfg then
			local equipcfg
			for k,v in ipairs(cfg) do
				if level >= v.level then
					equipcfg = v
				end
			end
			if equipcfg then
				local rand = System.getRandomNumber(3) + 1
				local itemid = equipcfg.items[rand]
				if itemid then
					LActor.giveItem(actor, itemid,1,"auditing")
					LActor.takeonEquip(actor, itemid, 0, 2)
				end
			end
		end
		var.AuditingLevel = nil
	end
end

actorevent.reg(aeUserLogin, onLogin)
