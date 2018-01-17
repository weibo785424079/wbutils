const nToCurrency = require('../src/numberToCurrency')

var expect = require('chai').expect

describe('应该等于二百五十块五毛', function () {
    it('应该等于二百五十块五毛', function () {
        expect(nToCurrency(250.5)).equal('贰佰伍拾元伍角')
    })
})