// app.js is Hailun Li's COMP1072 final exam about a dice rolling
// web application. The file is created on April 21, 2016.
/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

    "use strict";

    //global variables
    var screenWidth = window.innerWidth * 0.8;

    // reference to canvas element
    var canvas = document.getElementById("canvas");
    canvas.setAttribute("width", screenWidth);
    canvas.setAttribute("height", "720");

    // create a stage container object
    var stage = new createjs.Stage(canvas);

    var dice1 = getElementById('dice1');
    var dice2 = getElementById('dice2');
    var d1image = document.getElementById("d1image");
    var d2image = document.getElementById("d2image");

    // generate random number
    function roll(){

        var d1value = Math.floor((Math.random()*6+)1);
        var d2value = Math.floor((Math.random()*6+)1);

        dice1.innerHTML = d1value;
        dice2.innerHTML = d2value;

        stage.update();
        image();
    }
    // generate image according to dice value
    function image() {
      if (d1value = 1) {
      d1image = new createjs.Bitmap(../assets/images/Dice1);
      }
      if (d1value = 2) {
      d1image = new createjs.Bitmap(../assets/images/Dice2);
      }
      if (d1value = 3) {
      d1image = new createjs.Bitmap(../assets/images/Dice3);
      }
      if (d1value = 4) {
      d1image = new createjs.Bitmap(../assets/images/Dice4);
      }
      if (d1value = 5) {
      d1image = new createjs.Bitmap(../assets/images/Dice5);
      }
      if (d1value = 6) {
      d1image = new createjs.Bitmap(../assets/images/Dice6);
      }
      stage.addChild(dice1);
      stage.addChild(d1image);

      if (d2value = 1) {
      d1image = new createjs.Bitmap(../assets/images/Dice1);
      }
      if (d2value = 2) {
      d1image = new createjs.Bitmap(../assets/images/Dice2);
      }
      if (d2value = 3) {
      d1image = new createjs.Bitmap(../assets/images/Dice3);
      }
      if (d2value = 4) {
      d1image = new createjs.Bitmap(../assets/images/Dice4);
      }
      if (d2value = 5) {
      d1image = new createjs.Bitmap(../assets/images/Dice5);
      }
      if (d2value = 6) {
      d1image = new createjs.Bitmap(../assets/images/Dice6);
      }
      stage.addChild(dice2);
      stage.addChild(d2image);

    }


})();
