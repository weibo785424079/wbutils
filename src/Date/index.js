let DateUtil = {}

/**
 * 将毫秒数转化为时间
 * @ms 毫秒
 */
DateUtil.msToTime = function (ms) {
    let second  = ms / 1000,
        left,
        day = 0,
        hours = 0,
        minutes = 0,        
        seconds = 0
    left = second / ( 24 * 60 * 60)
    day = Math.floor(left)
    left = second % ( 24 * 60 * 60)
    hours = Math.floor(left / (60 * 60))
    left = left  % (60 * 60)
    minutes = Math.floor(left / 60)
    seconds = left % 60
    return {
        day,
        hours,
        minutes,
        seconds
    }
}

DateUtil.secondsToTime = function (seconds, type = 'short', format = '-') {
    let year,
        month,
        day,
        hour,
        minute,
        second
    let time = new Date(seconds)
    year = time.getFullYear()
    month = time.getMonth() + 1
    day = time.getDate()
    hour = time.getHours()
    minute = time.getMinutes()
    second = time.getSeconds()
    return `${year}${format}${month}${format}${day}` + (type === 'short'? '' : ` ${hour}:${minute}:${second}`)
}

module.exports = DateUtil