$(document).ready(function() {
  $("form#places").submit(function(event) {
    event.preventDefault();

    var inputtedPlace = $("input#new-place").val();
    var inputtedDate = $("input#new-date").val();
    var inputtedNote = $("input#new-note").val();
    var newLocation = { place: inputtedPlace,
                        dates: inputtedDate,
                        note: inputtedNote };

    $("ul#details").append("<li><span class='place'>" +
                          newLocation.place +
                          "</span></li>");

    $("input#new-place").val("");
    $("input#new-date").val("");
    $("input#new-note").val("");

    var $lastPlace = $(".place").last();
    console.log($lastPlace);

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newLocation.place);
      $("#place").text(newLocation.place);
      $("#dates").text(newLocation.dates);
      $("#note").text(newLocation.note);
    });
  });
});
