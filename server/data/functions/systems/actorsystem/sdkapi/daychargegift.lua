module("daychargegift", package.seeall)


--hadGetGiftIndex每天领取索引
--recharge 每天充值金额
--canGetGiftIndex可以领奖的最高档次索引
local function getStaticData(actor)
    local var = LActor.getStaticVar(actor)
    if nil == var.sdk_daychargegift then var.sdk_daychargegift = {} end
    return var.sdk_daychargegift
end
local function sendDayChargeGiftData(actor)
    local var = getStaticData(actor)
    local curIndex = var.hadGetGiftIndex or 1
    local recharge = var.recharge or 0
    local canGetIndex = var.canGetGiftIndex or 0
    local openflag = 0
    local gmOpType = getdayChargeGmOp()
    if gmOpType  == 1 or  gmOpType  == 3 then
        openflag = 1
    end
    local giftCount = #DayChargeGiftConfig
    local status = 0 --0不能领取 1可以领取
    if curIndex <= giftCount and canGetIndex >= curIndex then
        status = 1
    end
    local npack = LDataPack.allocPacket(actor, Protocol.CMD_PlatformActivity, Protocol.sPlatformActivityCmd_SendDayChargeGiftInfo)
    LDataPack.writeByte(npack,openflag)
    LDataPack.writeByte(npack, curIndex)
    LDataPack.writeByte(npack, status)
    LDataPack.writeInt(npack, recharge)
    print("send daychargegift = ".. curIndex.." "..giftCount.. " " .. canGetIndex .. " ".. status .. " "..recharge)
    LDataPack.flush(npack)
end
local function dayChargeGiftGetAward(actor)
    local var = getStaticData(actor)
    local curIndex = var.hadGetGiftIndex or 1
    local recharge = var.recharge or 0
    local canGetIndex = var.canGetGiftIndex or 0
    local giftCount = #DayChargeGiftConfig
    if curIndex > giftCount then
       local msg = string.format("当前领奖索引%d大于配置%d",curIndex, giftCount)
       LActor.sendTipmsg(actor,msg)
       return
    end
    local cfg = DayChargeGiftConfig[curIndex]
    if canGetIndex < curIndex  then
        local msg = string.format("当前可领奖索引%d大于配置%d",canGetIndex,curIndex)
        LActor.sendTipmsg(actor,msg)
        return
    end
    if not LActor.canGiveAwards(actor, cfg.awards) then
        LActor.sendTipmsg(actor, "背包已满,请清理背包再领取")
        return 
    end
    LActor.giveAwards(actor, cfg.awards, "sdkapi dayChargeGiftGetAward")
    var.hadGetGiftIndex = curIndex + 1
    sendDayChargeGiftData(actor)
    print(LActor.getName(actor).." dayChargeGiftGetAward index = "..curIndex)
    LActor.sendTipmsg(actor, "领奖成功")
end
local function dayChargeGiftOp(actor, packet)
    local type = DataPack.readByte(packet)
    if type == 0 then
        sendDayChargeGiftData(actor)
    elseif type == 1 then
        dayChargeGiftGetAward(actor)
    end
end
--跨天销毁
local function clearAwardItem(actor)
    for k,v1 in pairs(DayChargeGiftConfig) do
        for i,v2 in ipairs(v1.awards) do
           local itemCount = LActor.getItemCount(actor, v2.id)
           if itemCount > 0 then
              LActor.costItem(actor, v2.id, itemCount, "DayChargeGiftConfig clearAwardItem")
           end
        end
    end
end

local function onNewDay(actor)
   local var = getStaticData(actor)
   var.hadGetGiftIndex = nil
   var.recharge = nil
   sendDayChargeGiftData(actor)
   clearAwardItem(actor)
end

local function calcCanGetGiftIndex(actor)
    --改成单日累充了,新加var.canGetGiftIndex
   local var = getStaticData(actor)
   local recharge = var.recharge or 0
   var.canGetGiftIndex = var.canGetGiftIndex or 0
   for i,v in pairs(DayChargeGiftConfig) do
      if i > var.canGetGiftIndex and recharge >= v.money then
         var.canGetGiftIndex = i
      end
   end
   print("var.canGetGiftIndex:".. var.canGetGiftIndex)
end
local function onRecharge(actor, value)
   local optype,optime = getdayChargeGmOp()
   if optype  == 0 or optype  == 2  then
       return
   end
   local var = getStaticData(actor)
   var.recharge = (var.recharge or 0) + value
   calcCanGetGiftIndex(actor)
   sendDayChargeGiftData(actor)
end

-- 1. 开启  2. 关闭 3.重置
function getdayChargeGmOp()
   local sysVar = System.getStaticVar()
   local optype = sysVar.dayChargeGiftGmOp or 0 
   local optime = sysVar.dayChargeGiftGmOpTime
   --return 1, System.getUnixTime()
   return optype,optime
end

function onLogin(actor)
   clearDayCharge(actor)
   calcCanGetGiftIndex(actor)
   sendDayChargeGiftData(actor) 
end

function clearDayCharge(actor)
   local var = getStaticData(actor)
   local optype,optime = getdayChargeGmOp()
   if optype  == 0 or optype  == 2  then
       return
   end
   if optype == 3 then
      if var.optime ~= optime then
          var.recharge = 0
          var.optime = optime
          var.hadGetGiftIndex  = nil
          var.canGetGiftIndex = nil
      end
   end
end

function dayChargeGiftGmOp(type)
    local sysVar = System.getStaticVar()
    sysVar.dayChargeGiftGmOp = type
    sysVar.dayChargeGiftGmOpTime = System.getUnixTime()
    local players = LuaHelp.getAllActorList()
    if not players then return end
    for _, player in ipairs(players) do
        if player then 
            clearDayCharge(player)
            sendDayChargeGiftData(player)
        end
    end
end

actorevent.reg(aeUserLogin, onLogin)
actorevent.reg(aeNewDayArrive, onNewDay)
actorevent.reg(aeRecharge, onRecharge)
netmsgdispatcher.reg(Protocol.CMD_PlatformActivity, Protocol.cPlatformActivityCmd_DayChargeGiftOp, dayChargeGiftOp)
