var express = require('express');
var router = express.Router();
var $ = require('jquery');
var hotel = require('../../models/hotel');
var restaurant = require('../../models/restaurant');
var activity = require('../../models/activity');
var Promise = require('bluebird');

module.exports = router;

// GET /api/hotels
router.get('/hotels', function(req, res, next){
  hotel.findAll()
    .then(function(allHotels){
      res.json(allHotels);
    })
    .catch(next);
});

// GET /api/restaurants
router.get('/restaurants', function(req, res, next){
  restaurant.findAll()
    .then(function(allRestaurants){
      res.json(allRestaurants);
    })
    .catch(next);
});

// GET /api/activities
router.get('/activities', function(req, res, next){
  activity.findAll()
    .then(function(allActivities){
      res.json(allActivities);
    })
    .catch(next);
})
