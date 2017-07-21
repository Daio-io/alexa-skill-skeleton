'use strict';

var expect = require('chai').expect;
var tooly = require('../tooly/tooly.js');

describe('clippy', function () {

  it('should return clipped string', function () {

    var longString = 'hello i am a long string';
    var clippedString = tooly.clippy(longString, 5);

    expect(clippedString).to.have.length(5);

  });

  it('should ignore clips longer than actual string length', function () {

    var longString = 'hello I am a long string';
    var clippedString = tooly.clippy(longString, 100);

    expect(clippedString).to.have.length(longString.length);

  });

  it('should clip 0 or less to empty', function () {

    var longString = 'hello I am a long string';
    var clippedString = tooly.clippy(longString, 0);

    expect(clippedString).to.have.length(0);
    expect(clippedString).to.be.empty;

    var minusString = tooly.clippy(longString, -1);

    expect(minusString).to.have.length(0);
    expect(minusString).to.be.empty;

  });

  it('should return empty string if string not passed in', function () {

    expect(tooly.cleansey()).to.be.empty;
    expect(tooly.cleansey({})).to.be.empty;
    expect(tooly.cleansey([])).to.be.empty;
    expect(tooly.cleansey(null)).to.be.empty;
    expect(tooly.cleansey(undefined)).to.be.empty;

  });

});