'use strict';

var expect = require('chai').expect;
var tooly = require('../tooly/tooly.js');

describe('removey', function () {

  it('should return string with removed value', function () {

    var replaced = tooly.removey('h', 'hello');
    expect(replaced).to.equal('ello');

  });

  it('should return empty string if not provided with string', function () {

    var word = 'hello';
    var objs = [
      [],
      {},
      123,
      null,
      undefined
    ];

    objs.forEach(function (remove) {

      var res = tooly.removey(remove, word);
      expect(res).to.be.empty;

    });

  });

});