module("hefutime", package.seeall)

function getHeFuCfg(serverid)
    local spid = System.getSystemDef("SPID")
    for k,v in pairs(HeFuConfig) do
        if  v.serverid == serverid and  v.spid == spid then
            return v
        end
    end
    return nil 
end


function getHeFuTime()
    local serverid = System.getServerId()
    local cfg = getHeFuCfg(serverid)
    if not cfg  then
        return
    end

    local hefutime = cfg.time
    local Y,M,d,h,m = string.match(hefutime, "(%d+)%.(%d+)%.(%d+)-(%d+):(%d+)")
    if Y == nil or M == nil or d == nil or h == nil or m == nil then
        return
    end

    return System.timeEncode(Y, M, d, h, m, 0)
end

function getHeFuDayStartTime()
    local serverid = System.getServerId()
    local cfg = getHeFuCfg(serverid)
    if not cfg  then
        return
    end

    local hefutime = cfg.time
    local Y,M,d,h,m = string.match(hefutime, "(%d+)%.(%d+)%.(%d+)-(%d+):(%d+)")
    if Y == nil or M == nil or d == nil or h == nil or m == nil then
        return
    end

    return System.timeEncode(Y, M, d, 0, 0, 0)
end

function getHeFuDay()
    local hefutime = getHeFuDayStartTime()
    if not hefutime then
        return nil
    end

    local nowtime = System.getNowTime()

    local day = math.floor((nowtime - hefutime) / (24 * 3600))
    return day + 1
end

--获取合服次数
function getHeFuCount()
    local serverid = System.getServerId()
    local cfg = getHeFuCfg(serverid)
    if not cfg then
        --找不到配置
        return 0
    end

    --默认合服一次
    return cfg.mergeCount or 1
end
