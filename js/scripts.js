$(document.readyState(function() {
  $("#language").submit(function(event) {
    event.preventDefault();
    const choice = $("#why").val();

    const why = $("input:radio[name=why]:checked").val();
    const how = $("input:radio[name=how]:checked").val();

    if (why = willofgods) {
      $("#ruby").toggle();
    } else if (why = careerchange) {
      $("#rust").toggle()
    } else if (why = forfun) {
      $("python").toggle();
    } else {
      $("#woops").show();
    }
  });


  })
}))
