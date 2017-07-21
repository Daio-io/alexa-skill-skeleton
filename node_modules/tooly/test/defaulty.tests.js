'use strict';

var expect = require('chai').expect;
var tooly = require('../tooly/tooly.js');

describe('defaulty', function () {

  var someDefault = 'some_default';

  it('should return the value if exists', function () {

    var arr = [];
    var obj = {};
    var func = function() {};
    expect(tooly.defaulty('hello', someDefault)).to.equal('hello');
    expect(tooly.defaulty(arr, someDefault)).to.equal(arr);
    expect(tooly.defaulty(obj, someDefault)).to.equal(obj);
    expect(tooly.defaulty(func, someDefault)).to.equal(func);

  });

  it('should return a default if value does not exist', function () {


    expect(tooly.defaulty('', someDefault)).to.equal(someDefault);
    expect(tooly.defaulty(null, someDefault)).to.equal(someDefault);
    expect(tooly.defaulty(undefined, someDefault)).to.equal(someDefault);

  });

  it('should return undefined value does not exist and no default provided', function () {

    expect(tooly.defaulty()).to.be.undefined;

  });

});