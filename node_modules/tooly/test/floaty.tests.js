'use strict';

var expect = require('chai').expect;
var tooly = require('../tooly/tooly.js');

describe('floaty', function () {

  it('should convert string to float value', function () {

    expect(tooly.floaty("12.23")).to.equal(12.23);

  });

  it('should return 0 when not a number', function () {

    expect(tooly.inty({})).to.equal(0);
    expect(tooly.inty([])).to.equal(0);
    expect(tooly.inty(function () {
    })).to.equal(0);
    expect(tooly.inty("NOT A NUMBER")).to.equal(0);
    expect(tooly.inty()).to.equal(0);

  });

});