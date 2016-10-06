var express = require('express');
var router = express.Router();
var chalk = require('chalk');
var $ = require('jquery');
var hotel = require('../../models/hotel');
var restaurant = require('../../models/restaurant');
var activity = require('../../models/activity');
var day = require('../../models/day');
var Promise = require('bluebird');
//var dayObject = require('../../js/day');

module.exports = router;

router.get('/', function(req, res, next){
  day.findAll()
    .then(function(allDays){
    res.json(allDays);
    })
    .catch(next);
});

router.post('/', function(req, res, next){
  console.log(chalk.blue(req.query));
  day.findOrCreate({
    where: {
      number: req.body.number
    }
  })
  .spread(function(foundDay, boolDay){
    res.json(foundDay);
  })
  .catch(next);

});

router.post('/:id/hotels', function(req, res, next){

});

router.post('/:id/restaurants', function(req, res, next){

});

router.post('/:id/activities', function(req, res, next){

});

router.post('/:id/days', function(req, res, next){

});


// router.get('/:id/restaurants', function(){

// })
