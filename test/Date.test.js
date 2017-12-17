let DateUtil =  require('../src/Date')
var expect = require('chai').expect

describe('毫秒数转时间', function () {
    it('应该等于一天多点', function() {
        expect(DateUtil.msToTime((60 * 24 * 60 + 3 * 60 * 60 + 2 * 60 + 10) * 1000)).to.be.deep.equal({
                day: 1,
                hours: 3,
                minutes: 2,
                seconds: 10
        })
    })
})
describe('秒数转时间', function () {
    it('应该等于今天', function() {
        expect(DateUtil.secondsToTime(Date.now())).to.be.equal('2017-12-18')
    })
})