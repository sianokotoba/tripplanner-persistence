'use strict';
/* global $ tripModule attractionsModule hotels restaurants activities */

/**
 * This module fills the `select` tags with `option`s.
 * It runs immediately upon document ready (not called by other modules).
 * Each `option` displays the name of an attraction and is has a value of
 * that attraction's id. Selecting an option looks up the attraction by id,
 * then tells the trip module to add the attraction.
 */
var hotels;
var restaurants;
var activities;

$(function(){

  // jQuery selects
  var $optionsPanel = $('#options-panel');
  var $hotelSelect = $optionsPanel.find('#hotel-choices');
  var $restaurantSelect = $optionsPanel.find('#restaurant-choices');
  var $activitySelect = $optionsPanel.find('#activity-choices');

  $.ajax({
    method: 'GET',
    url: '/api/hotels',
    // data: , // e.g. for POST requests
  })
  .then(function (responseData) {
    hotels = responseData;
    // some code to run when the response comes back
    hotels.forEach(makeOption, $hotelSelect);
  })
  .catch(function (errorObj) {
    console.error(errorObj);
    // some code to run if the request errors out
  });

  $.ajax({
    method: 'GET',
    url: '/api/restaurants',
    // data: , // e.g. for POST requests
  })
  .then(function (responseData) {
    restaurants = responseData;
    restaurants.forEach(makeOption, $restaurantSelect);
    // some code to run when the response comes back
  })
  .catch(function (errorObj) {
    console.error(errorObj);
    // some code to run if the request errors out
  });

  $.ajax({
    method: 'GET',
    url: '/api/activities',
    // data: , // e.g. for POST requests
  })
  .then(function (responseData) {
    activities = responseData;
    activities.forEach(makeOption, $activitySelect);
    // some code to run when the response comes back
  })
  .catch(function (errorObj) {
    console.error(errorObj);
    // some code to run if the request errors out
  });

  // make all the option tags (second arg of `forEach` is a `this` binding)



  function makeOption (databaseAttraction) {
    var $option = $('<option></option>') // makes a new option tag
      .text(databaseAttraction.name)
      .val(databaseAttraction.id);
    this.append($option); // add the option to the specific select
  }

  // what to do when the `+` button next to a `select` is clicked
  $optionsPanel.on('click', 'button[data-action="add"]', function () {
    var $select = $(this).siblings('select');
    var type = $select.data('type'); // from HTML data-type attribute
    var id = $select.find(':selected').val();
    // get associated attraction and add it to the current day in the trip
    var attraction = attractionsModule.getByTypeAndId(type, id);
    tripModule.addToCurrent(attraction);
  });

});
