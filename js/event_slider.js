$(function () {
    $('.slider_panel').append($('.slider_image').first().clone());
    $('.slider_panel').prepend($('.slider_image').eq(-2).clone());
    let index=1;
    moveSlider(index);
    $('.conrtrol_button').click(function () {
        index=$(this).index();
        moveSlider(index+1);
    });
    $('.left_control').click(function () {
        if(index > 1) {
            index--;
            moveSlider(index);
        }else {
            $('.slider_panel').css('left',-5100);
            index=10;
            moveSlider(index);
        }
    });
    $('.right_control').click(function () {
        if(index < 10) {
            index++;
            moveSlider(index);
        }else {
            $('.slider_panel').css('left',0);
            index=1;
            moveSlider(index);
        }
    });
    //이미지 슬라이드 구현
    function moveSlider(index) {
        $('.slider_panel').animate({
            left:-(index*510)
        },'slow');
        $('.conrtrol_button').removeClass('active');
        $('.conrtrol_button').eq(index-1).addClass('active');
    }
    
});