$(document).ready(function() {
  $("#question5").submit(function(event) {
    event.preventDefault();
    const why = $("input:radio[name=why]:checked").val();
    if (why === "forFun") {
      $("#ruby").show();
      $("#rust").hide();
      $("#python").hide();
      $("#woops").hide();
    } else if (why === "careerChange") {
      $("#rust").show();
      $("#ruby").hide();
      $("#python").hide();
      $("#woops").hide();
    } else if (why === "willG") {
      $("#python").show();
      $("#ruby").hide();
      $("#rust").hide();
      $("#woops").hide();
    } else {
      $("#woops").show();
      $("#ruby").hide();
      $("#python").hide();
      $("#rust").hide();
    }
$( "button" ).first().click(function() {
  $( "#quiz" ).first().fadeToggle( "slow", "linear" );
  });
})})