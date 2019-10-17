module("qqvipgift", package.seeall)


local function getStaticData(actor)
    local var = LActor.getStaticVar(actor)
    if nil == var.qqvipgift then var.qqvipgift = {} end
    return var.qqvipgift
end


function sendQQVipPrivilegeGiftData(actor)
    local var = getStaticData(actor)
    local vip  = var.QQVip or 0 
    local flag = 0
    if vip > 0 then
        flag = var.QQVipPriGift or 1
    end
    local npack = LDataPack.allocPacket(actor, Protocol.CMD_PlatformActivity, Protocol.sPlatformActivityCmd_SendQQVipPrivilegeGiftData)
    if not npack then return end
    LDataPack.writeInt(npack, flag)
    LDataPack.flush(npack)
end


function sendQQVipGiftData(actor)
    local var = getStaticData(actor)
    local vip  = var.QQVip or 0 
    local data = var.VipGift or {}
    local npack = LDataPack.allocPacket(actor, Protocol.CMD_PlatformActivity, Protocol.sPlatformActivityCmd_SendQQVipGiftData)
    if not npack then return end
    LDataPack.writeInt(npack, #QQVipGiftConfig)
    for k,v in ipairs(QQVipGiftConfig) do
        LDataPack.writeInt(npack,  v.vip)
        if vip >= v.vip then 
            LDataPack.writeInt(npack,  v.count -  (data[v.vip] or 0) )
        else
            LDataPack.writeInt(npack, 0)
        end
    end
    LDataPack.flush(npack)
end


local function getQQVipPrivilegeGiftData(actor, packet)
    local vip = LDataPack.readInt(packet)
    local var = getStaticData(actor)
    var.QQVip = vip
    sendQQVipPrivilegeGiftData(actor)
end

local function  getQQVipGiftData(actor, packet)
    local vip = LDataPack.readInt(packet)
    local var = getStaticData(actor)
    var.QQVip = vip
    sendQQVipGiftData(actor)
end

local function  getQQVipPrivilegeGift(actor, packet)
    local var = getStaticData(actor)
    if var.QQVipPriGift  == 2 then
        sendQQVipPrivilegeGiftData(actor)
        return
    end
    local vip = LDataPack.readInt(packet)
    if vip < 1 then return end
    local awards = QQVipPrivilegeGiftConfig[vip].awards
    if awards then 
        local title = string.format("小游戏Vip%d特权礼包", vip) 
        local content = string.format("恭喜你领取小游戏Vip%d特权礼包:", vip)
        local mailData = {head= title, context= content, tAwardList= awards}
        mailsystem.sendMailById(LActor.getActorId(actor), mailData)
        var.QQVipPriGift = 2
    end
    sendQQVipPrivilegeGiftData(actor)
end

local function  getQQVipGift(actor, packet)
    local var = getStaticData(actor)
    if var.VipGift == nil then var.VipGift = {} end
    local vip = LDataPack.readInt(packet)
    local buyCount = var.VipGift[vip] or 0
    if vip < 1 then return end
    local cfg = QQVipGiftConfig[vip]
    if not cfg then return end
    if  buyCount  >=  cfg.count then return end
    local yb = LActor.getCurrency(actor, NumericType_YuanBao)
    if cfg.needYb > yb then return end
    LActor.changeYuanBao(actor, 0 - cfg.needYb, "QQVipGift"..tostring(cfg.needYb))
    local title = string.format("购买小游戏Vip%d特权礼包", vip) 
    local content = string.format("恭喜你购买小游戏Vip%d特权礼包:", vip)
    local mailData = {head= title, context= content, tAwardList= cfg.awards}
    mailsystem.sendMailById(LActor.getActorId(actor), mailData)
    var.VipGift[vip] =  buyCount + 1
    sendQQVipGiftData(actor)
end

local function onLogin(actor)

end

local function onNewDay(actor)
   local var = getStaticData(actor)
   var.QQVipPriGift = nil
   var.VipGift = nil
   sendQQVipPrivilegeGiftData(actor)
   sendQQVipGiftData(actor)
end

actorevent.reg(aeNewDayArrive, onNewDay)
actorevent.reg(aeUserLogin, onLogin)
netmsgdispatcher.reg(Protocol.CMD_PlatformActivity, Protocol.cPlatformActivityCmd_GetQQVipPrivilegeGiftData, getQQVipPrivilegeGiftData)
netmsgdispatcher.reg(Protocol.CMD_PlatformActivity, Protocol.cPlatformActivityCmd_GetQQVipPrivilegeGift, getQQVipPrivilegeGift)
netmsgdispatcher.reg(Protocol.CMD_PlatformActivity, Protocol.cPlatformActivityCmd_GetQQVipGiftData, getQQVipGiftData)
netmsgdispatcher.reg(Protocol.CMD_PlatformActivity, Protocol.cPlatformActivityCmd_GetQQVipGift, getQQVipGift)

