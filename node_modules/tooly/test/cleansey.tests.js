'use strict';

var expect = require('chai').expect;
var tooly = require('../index.js');

describe('cleansey', function () {

  it('should keep spaces', function () {

    var word = 'hello world';
    var cleansed = tooly.cleansey(word);
    expect(cleansed).to.equal(word);

  });

  it('should keep capital letters', function () {

    var word = 'HelLo WorLd';
    var cleansed = tooly.cleansey(word);
    expect(cleansed).to.equal(word);

  });

  it('should keep hyphens letters', function () {

    var word = 'HelLo-WorLd--';
    var cleansed = tooly.cleansey(word);
    expect(cleansed).to.equal(word);

  });

  it('should remove numbers', function () {

    var cleansed = tooly.cleansey('22h3llo');
    expect(cleansed).to.equal('hllo');

  });

  it('should remove special characters', function () {

    var cleansed = tooly.cleansey('cr@zy\n word!@£$%^&*()_+{}":|?><~/.,\';][=§±');
    expect(cleansed).to.equal('crzy word');

  });

  it('should return empty string if passed empty value', function () {

    expect(tooly.cleansey()).to.be.empty;

  })

});