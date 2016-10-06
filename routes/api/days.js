var express = require('express');
var router = express.Router();
var $ = require('jquery');
var hotel = require('../../models/hotel');
var restaurant = require('../../models/restaurant');
var activity = require('../../models/activity');
var day = require('../../models/day');
var Promise = require('bluebird');

module.exports = router;

router.get('/', function(req, res, next){
  day.findAll()
    .then(function(allDays){
      console.log("ALLDAYS:", allDays)
    })
    .catch(next);
});


// router.get('/:id/restaurants', function(){

// })
