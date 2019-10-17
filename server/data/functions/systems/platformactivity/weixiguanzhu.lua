module("weixiguanzhu", package.seeall)


local function getData(actor) 
	local var = LActor.getStaticVar(actor) 
	if var == nil then 
		return nil 
	end
	if var.weixi == nil then 
		var.weixi = {}
	end

	if var.weixi.guan_zhu == nil then 
		var.weixi.guan_zhu = 0
	end
	return var.weixi
end


local function getGuanZhuAwards(actor)
	local var = getData(actor)
	if var.guan_zhu ~= 0 then 
		print("get wei xi guan zhu  awards repeat")
		SendWeiXinShareResult(actor,-1)
		return false
	end

	print("get wei xi guan zhu  awards ok")
	var.guan_zhu = 1
	--LActor.giveAwards(actor,WeiXiGuanZhuConst.awards,"wei xi guan zhu")
	--
	--
	local mail_data = {}
	mail_data.head = WeiXiGuanZhuConst.head
	mail_data.context = WeiXiGuanZhuConst.context
	mail_data.tAwardList = WeiXiGuanZhuConst.awards
	mailsystem.sendMailById(LActor.getActorId(actor),mail_data)	
	SendWeiXinShareResult(actor,-1)
	return true
end

function  SendWeiXinShareResult(actor,flag)
    local npack = LDataPack.allocPacket(actor, Protocol.CMD_PlatformActivity, Protocol.sPlatformActivityCmd_WeiXinShareResult)
    LDataPack.writeInt(npack, flag)
    LDataPack.flush(npack)
end


local function onLogin(actor)
end


local function onGetAwrds(actor,packet)
	local type = LDataPack.readInt(packet)
	if type == 1 then
		local var = getData(actor)
		if var.guan_zhu == 0 then
			SendWeiXinShareResult(actor,0)
		else
			SendWeiXinShareResult(actor,-1)
		end
	else
		getGuanZhuAwards(actor)
	end
end
actorevent.reg(aeUserLogin, onLogin)
netmsgdispatcher.reg(Protocol.CMD_PlatformActivity, Protocol.cPlatformActivityCmd_WeiXiGuanZhu, onGetAwrds)


