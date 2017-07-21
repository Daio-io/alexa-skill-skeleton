'use strict';

var expect = require('chai').expect;
var tooly = require('../tooly/tooly.js');

describe('inty', function () {

  it('should convert string to integer value', function () {

    expect(tooly.inty("123")).to.equal(123);

  });

  it('should round floats/doubles string to integer', function () {

    expect(tooly.inty("10.50")).to.equal(10);

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