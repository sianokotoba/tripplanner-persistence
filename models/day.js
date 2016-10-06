var Sequelize = require('sequelize');
var db = require('./_db');

var Day = db.define('Day', {
  number: {
    type: Sequelize.INTEGER
  }
});

module.exports = Day;
