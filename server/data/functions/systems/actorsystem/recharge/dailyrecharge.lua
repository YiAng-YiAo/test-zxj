--包括首充和每日充值套餐
module("dailyrecharge", package.seeall)

--[[
data define:

    dailyrechargeData = {
        payCount -- number      当天已冲金额
        firstReward   0不可领取，1可以领取，2已领取
        rewardRecord -- number  bitset  每日充值奖励信息
        chargeDay   --充值天数,为该服的开服天数,1开始
    }
--]]

local function getStaticData(actor)
    local var = LActor.getStaticVar(actor)
    if nil == var.dailyrechargeData then var.dailyrechargeData = {} end

    return var.dailyrechargeData
end

function getPayCount(actor)
    local var = getStaticData(actor)
    return var.payCount or 0
end

--每日充值初始化
local function dailyDataInit(actor)
    local var = getStaticData(actor)
    var.payCount = 0
    var.rewardRecord = 0
end

--获取每日充值具体档次配置
local function getDailyRechargeConfig(index)
    local openDay = System.getOpenServerDay() + 1
    local maxChangeDay = #DailyRechargeConfig

    --处于开服天数变动配置
    if maxChangeDay >= openDay then
        if DailyRechargeConfig[openDay] and DailyRechargeConfig[openDay][index] then
            return DailyRechargeConfig[openDay][index]
        end
    else
        local value = openDay - maxChangeDay
        local day = value % #LoopRechargeConfig

        --0表示是循环的最后一天
        if 0 == day then day = #LoopRechargeConfig end

        if LoopRechargeConfig[day] and LoopRechargeConfig[day][index] then
            return LoopRechargeConfig[day][index]
        end
    end

    print("dailyrecharge.getDailyRechargeConfig:conf is null, openDay:"..tostring(openDay)..",index:"..tostring(index))
    return nil
end

--根据开服天数获取每日充值配置
local function getDailyConfigByOpenday(openDay)
    if #DailyRechargeConfig >= openDay then return DailyRechargeConfig[openDay] end

    local value = openDay - #DailyRechargeConfig
    local totalDay = #LoopRechargeConfig
    return LoopRechargeConfig[value%totalDay]
end

--检测该索引的奖励是否可以领取
local function checkDailyRewardStatus(actor, index)
    local var = getStaticData(actor)
    if not System.bitOPMask(var.rewardRecord or 0, index) then return false end

    return true
end

--检测充值金额是否满足要求
local function checkPayCount(actor, conf)
    local var = getStaticData(actor)
    if (var.payCount or 0) < conf.pay then return false end

    return true
end

--是否为首充
function isFirstRecharge(actor)
    local var = getStaticData(actor)
    return 0 == (var.firstReward or 0)
end

--补发每日充值奖励
local function sendDailyRewardMail(actor)
    local var = getStaticData(actor)
    local openDay = var.chargeDay or 0

    if 0 == openDay then return end

    --获取最新充值该天的配置
    local conf = getDailyConfigByOpenday(openDay)
    if not conf then return end

    local var = getStaticData(actor)

    for i=0, #conf do
        if checkPayCount(actor, conf[i]) then
            --发邮件
            if not checkDailyRewardStatus(actor, i) then
                local content = string.format(ChongZhiBaseConfig.dailyRechargeContent, conf[i].pay)
                local mailData = {head=ChongZhiBaseConfig.dailyRechargeTitle, context=content, tAwardList=conf[i].awardList}

                mailsystem.sendMailById(LActor.getActorId(actor), mailData)

                print("dailyrecharge.sendDailyRewardMail:send success, day:"..tostring(openDay)..", index:"..tostring(i)..", actorId:"..tostring(LActor.getActorId(actor)))
            end
        end
    end
end

--领取首充奖励
local function onReqFirstReward(actor)
    local data = getStaticData(actor)
    local actorId = LActor.getActorId(actor)

    --是否可以领取奖励
    if 1 ~= (data.firstReward or 0) then print("dailyrecharge.onReqFirstReward:firstReward can not get,actorId:"..tostring(actorId)) return end

    --获取创角职业
    local role_data = LActor.getRoleData(actor, 0)
    local reward = ChongZhiBaseConfig.firstRechargAward[role_data.job] or {}

    if not LActor.canGiveAwards(actor, reward) then print("dailyrecharge.onReqFirstReward:canGiveAwards is false") return end

    LActor.giveAwards(actor, reward, "首充奖励,job:"..tostring(role_data.job))
    data.firstReward = 2

    --公告
    noticemanager.broadCastNotice(ChongZhiBaseConfig.firstAwardNotice, LActor.getActorName(actorId) or "")

    sendInitInfo(actor)
end

--领取每日充值奖励
local function onReqDailyReward(actor, packet)
    local actorId = LActor.getActorId(actor)
    local index = LDataPack.readShort(packet)
    if 0 > index then print("dailyrecharge.onReqDailyReward:index is illgel:"..tostring(index)..",actorId:"..tostring(actorId)) return end

    local data = getStaticData(actor)

    --获取奖励配置
    local conf = getDailyRechargeConfig(index)
    if not conf then return end

    --是否已领取
    if checkDailyRewardStatus(actor, index) then
        print("dailyrecharge.onReqDailyReward:dailyReward already get, index:"..tostring(index)..",actorId:"..tostring(actorId))
        return
    end

    --金额是否满足
    if false == checkPayCount(actor, conf) then
        print("dailyrecharge.onReqDailyReward:payCount is not enough,payCount:"..tostring(data.payCount)..",actorId:"..tostring(actorId))
        return
    end

    if not LActor.canGiveAwards(actor, conf.awardList) then print("dailyrecharge.onReqFirstReward:canGiveAwards is false") return end

    --发奖励
    LActor.giveAwards(actor, conf.awardList, "每日充值,pay:"..tostring(conf.pay))

    data.rewardRecord = System.bitOpSetMask(data.rewardRecord or 0, index, true)

    sendInitInfo(actor)
    System.writeLocalLog(qlDailyReward,actor, index)
    local preCount = 0
    if index > 0 then
        local lcfg = getDailyRechargeConfig(index-1)
        if lcfg then preCount = lcfg.pay end
    end
    
    --公告
    noticemanager.broadCastNotice(ChongZhiBaseConfig.dailyAwardNotice, LActor.getActorName(actorId) or "", tostring(conf.value))
end

--返还元宝
local function changeGold(actor)
    local data = getStaticData(actor)
    local var =  LActor.getStaticVar(actor)
    local pay_type = var.lastpaytype

    --获取首冲配置
    local conf
    for i,v in ipairs(FirstRechargeConfig) do
        if  data.payCount == v.pay and pay_type == v.payType then
            conf = v
            break
        end
    end
    if not conf then print("dailyrecharge.changeGold:conf is null:"..tostring(data.payCount)) return end

    LActor.changeYuanBao(actor, conf.payReturn - data.payCount, "第一次充值返还:"..tostring(conf.pay))
    chargemail.sendMailByFirstCharge(actor, data.payCount or 0, conf.payReturn)
    System.writeLocalLog(qlFirstPay,actor, conf.payReturn)
    print("dailyrecharge.changeGold:firstrecharge return payCount:"..tostring(conf.payReturn - data.payCount)..",actorId:"..tostring(LActor.getActorId(actor)))
end

local function getFirstChargeConfig(paytype,count)
    for k,v in ipairs(FirstRechargeConfig) do
        if v.payType == paytype and v.pay == count then
            return v
        end
    end
    return nil 
end

local function getFirstChargeOldConfig(paytype,count)
    for k,v in ipairs(FirstRechargeOldConfig) do
        if v.payType == paytype and v.pay == count then
            return v
        end
    end
    return nil 
end


local function addPayReturnTab(actor_id, pay_type,yb)
    local sysVar = System.getStaticVar()
    if sysVar.payreturntab2  == nil then
         sysVar.payreturntab2 = {}
    end
    local item = {actorid = actor_id,  paytype = pay_type,yuanbao = yb, count = 1}
    table.insert(sysVar.payreturntab2, item)
end

local function sendPayRetrunMail(actor_id,day,yb)
    local awards = {{type = 0,id = 2,count = yb}}
    local mailData = {head= "首充七天返利", context= string.format("首充七天第%d天返利的%d元宝已经发放，敬请查收。",day,yb),tAwardList= awards}
    mailsystem.sendMailById(actor_id, mailData)
end

local function SendPayReturnAllMail()
    local sysVar = System.getStaticVar()
    if sysVar.payreturntab  == nil then
         sysVar.payreturntab = {}
    end
    if sysVar.payreturntab2  == nil then
         sysVar.payreturntab2 = {}
    end
    for i=#sysVar.payreturntab,1,-1 do
        local v = sysVar.payreturntab[i]
        if v then 
            local cfg = getFirstChargeOldConfig(v.paytype,v.yuanbao)
            if cfg and cfg.returnyb and v.count < #cfg.returnyb then
                v.count = v.count + 1
                sendPayRetrunMail(v.actorid, v.count, cfg.returnyb[v.count])
            end
        end
    end
    for i=#sysVar.payreturntab2,1,-1 do
        local v = sysVar.payreturntab2[i]
        if v then 
            local cfg = getFirstChargeConfig(v.paytype,v.yuanbao)
            if cfg and cfg.returnyb and v.count < #cfg.returnyb then
                v.count = v.count + 1
                sendPayRetrunMail(v.actorid, v.count, cfg.returnyb[v.count])
            end
        end
    end
end

local function onRecharge(actor, count)
    local data = getStaticData(actor)
    local actorId = LActor.getActorId(actor)
    data.payCount = (data.payCount or 0) + count
    print("dailyrecharge.onRecharge:count:"..tostring(count)..", payCount:"..tostring(data.payCount)..",actorId:"..tostring(actorId))

    --记录充值天数
    if System.getOpenServerDay() + 1 ~= (data.chargeDay or 0) then
        data.chargeDay = System.getOpenServerDay() + 1
    end

    --首次充值
    if 0 == (data.firstReward or 0) then
        data.firstReward = 1
        changeGold(actor)
        --元宝和特权卡赠送
        local var =  LActor.getStaticVar(actor)
        local paytype =  var.lastpaytype or ""
        local paycount = var.lastpaycount or 0
        local ordernum = var.lastpayorder or ""
        local level = LActor.getLevel(actor)
        local cfg = getFirstChargeConfig(paytype,paycount)
        if cfg then
            if  cfg.monthcard == true then
                var.firstmonthcard = true
                monthcard.buyMonth(actorId)
            end
            if cfg.privilege == true then
                var.firstprivilege = true
                privilegemonthcard.buyPrivilegeMonth(actorId)
            end
            --充值返利
            if cfg.returnyb then
                addPayReturnTab(actorId, paytype,paycount)
                sendPayRetrunMail(actorId, 1, cfg.returnyb[1] or 0)
            end
        end

    end
    sendInitInfo(actor)
end


function sendInitInfo(actor)
    local data = getStaticData(actor)
    local npack = LDataPack.allocPacket(actor, Protocol.CMD_Recharge, Protocol.sRechargeCmd_UpdateFirstRecharge)

    LDataPack.writeShort(npack, System.getOpenServerDay())
    LDataPack.writeInt(npack, data.payCount or 0)
    LDataPack.writeInt(npack, data.firstReward or 0)
    LDataPack.writeInt(npack, data.rewardRecord or 0)

    LDataPack.flush(npack)
end

local function onLogin(actor)
    sendInitInfo(actor)
end

local function onNewDay(actor, isLogin)
    --邮件补发
    sendDailyRewardMail(actor)

    --初始化
    dailyDataInit(actor)

    if not isLogin then sendInitInfo(actor) end
end

actorevent.reg(aeUserLogin, onLogin)
actorevent.reg(aeNewDayArrive, onNewDay)
actorevent.reg(aeRecharge, onRecharge)

netmsgdispatcher.reg(Protocol.CMD_Recharge, Protocol.cRechargeCmd_GetFirstRechargeReward, onReqFirstReward)
netmsgdispatcher.reg(Protocol.CMD_Recharge, Protocol.cRechargeCmd_GetDailyRechargeReward, onReqDailyReward)

function gmGetFirstReward(actor)
    onReqFirstReward(actor)
end

_G.SendPayReturnAllMail = SendPayReturnAllMail
