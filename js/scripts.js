$(document.readyState(function() {
  $("#language").submit(function(event) {
    event.preventDefault();
    const choice = $("#why").val();

    const why = $("input:radio[name=why]:checked").val();
    const how = $("input:radio[name=how]:checked").val();




  })
}))
