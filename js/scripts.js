$(document).ready(function() {
  $("#question1").submit(function(event) {
    event.preventDefault();
    const choice = $("#why").val();
    const why = $("input:radio[name=why]:checked").val();
    console.log(choice)
  
    if (choice === "forFun") {
      $("#ruby").show();
      $("#rust").hide();
      $("#python").hide();
      $("#woops").hide();
    } else if (choice === "careerChange") {
      $("#rust").show();
      $("#ruby").hide();
      $("#python").hide();
      $("#woops").hide();
    } else if (choice === "willOfGods") {
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