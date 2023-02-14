$(function () {
    $(".right_next").on("click", function () {
      $("#container").css({
        "display":"inline-block"
      })
      $('.seat_box').css ({
        'display':'none'
      });
    })
    $(".right_fast").on("click", function () {
      $(".ticketing_container").css({
        "display":"inline-block"
      })
      $('.seat_box').css ({
        'display':'none'
      })
      $('.result_btn button').click(function() {
        $('.result_btn button').removeClass('on');
        $('.seat_selection').css ({'display':'block'});
        $(this).addClass('on');
    })
    })
});