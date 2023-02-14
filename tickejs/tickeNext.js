$(function () {
    $(".seat_selection button").on("click", function () {
      $(".seat_box").css({
        "display":"inline-block"
      })
      $(".seat_selection").css({
        "display":"none"
      })
      $('.ticketing_container').css ({
        'display':'none'
      });
    });
  });