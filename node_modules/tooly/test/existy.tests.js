'use strict';

var expect = require('chai').expect;
var tooly = require('../index.js');

describe('existy', function () {

  it('should return false if nothing is passed in', function () {

    expect(tooly.existy()).to.equal(false);
    expect(tooly.existy(undefined)).to.equal(false);
    expect(tooly.existy(null)).to.equal(false);
    expect(tooly.existy('')).to.equal(false);

  });

  it('should return true when value passed in', function () {

    expect(tooly.existy([])).to.equal(true);
    expect(tooly.existy({})).to.equal(true);
    expect(tooly.existy('hello')).to.equal(true);

  });

  it('should return false when string of value "null" or "undefined" passed in', function () {

    expect(tooly.existy('null')).to.equal(false);
    expect(tooly.existy('undefined')).to.equal(false);

  });

});