var DateUtil = {};

/**
 * 将毫秒数转化为时间
 * @ms 毫秒
 */
DateUtil.msToTime = function (ms) {
    var second = ms / 1000,
        left = void 0,
        day = 0,
        hours = 0,
        minutes = 0,
        seconds = 0;
    left = second / (24 * 60 * 60);
    day = Math.floor(left);
    left = second % (24 * 60 * 60);
    hours = Math.floor(left / (60 * 60));
    left = left % (60 * 60);
    minutes = Math.floor(left / 60);
    seconds = left % 60;
    return {
        day: day,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
};

DateUtil.secondsToTime = function (seconds) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'short';
    var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '-';

    var year = void 0,
        month = void 0,
        day = void 0,
        hour = void 0,
        minute = void 0,
        second = void 0;
    var time = new Date(seconds);
    year = time.getFullYear();
    month = time.getMonth() + 1;
    day = time.getDate();
    hour = time.getHours();
    minute = time.getMinutes();
    second = time.getSeconds();
    return '' + year + format + month + format + day + (type === 'short' ? '' : ' ' + hour + ':' + minute + ':' + second);
};

module.exports = DateUtil;