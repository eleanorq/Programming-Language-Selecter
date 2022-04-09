$(document).ready(function() {
  $("#language").submit(function(event) {
    event.preventDefault();
    const choice = $("#question1").val();
    console.log(choice)
  
    if (choice === "forfun") {
      $("#ruby").show();
      $("#rust").hide();
      $("#python").hide();
      $("#woops").hide();
    } else if (choice === "Career change") {
      $("#rust").show();
      $("#ruby").hide();
      $("#python").hide();
      $("#woops").hide();
    } else if (choice === "willofgods") {
      $("python").show();
      $("#ruby").hide();
      $("#rust").hide();
      $("#woops").hide();
    } else {
      $("#woops").show();
      $("#ruby").hide();
      $("#python").hide();
      $("#rust").hide();
    }
  });})