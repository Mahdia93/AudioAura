var colorImport = require('spotifyembed.js');

$(document).ready(function() {
  // Getting references to the name inout and author container, as well as the table body
  var moodContainer = $("#colors");
  // var moodList = $(".container-fluid")

  var newItemInput = $(".playistbutton");

  // var red = $("#redRect.bars");
  // var pink = $("#pinkRect.bars");
  // var orange = $("#orangeRect.bars"); 
  // var yellow = $("#yellowRect.bars");
  // var green = $("#greenRect.bars");
  // var blue = $("#blueRect.bars");
  // var purple = $("#purpleRect.bars");
  // var brown = $("#brownRect.bars");
  // var white = $("#whiteRect.bars");
  // var grey = $("#greyRect.bars");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("click", ".playlistbutton", handleMoodFormSubmit);
  // $(document).on("click", "#pinkRect.bars", handleMoodFormSubmit);
  // $(document).on("click", "#orangeRect.bars", handleMoodFormSubmit);
  // $(document).on("click", "#yellowRect.bars", handleMoodFormSubmit);
  // $(document).on("click", "#greenRect.bars", handleMoodFormSubmit);
  // $(document).on("click", "#blueRect.bars", handleMoodFormSubmit);
  // $(document).on("click", "#purpleRect.bars", handleMoodFormSubmit);
  // $(document).on("click", "#brownRect.bars", handleMoodFormSubmit);
  // $(document).on("click", "#whiteRect.bars", handleMoodFormSubmit);
  // $(document).on("click", "#greyRect.bars", handleMoodFormSubmit);
  // Getting the intiial list of Moods
  var colors = [];

  getMood();

  // This function updates a todo in our database
  function updateMood(mood) {
    $.ajax({
      method: "PUT",
      url: "/api/moods",
      data: mood
    }).done(getMoods);
  }
