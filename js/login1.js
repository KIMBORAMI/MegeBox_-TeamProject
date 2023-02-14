
function popupClose() {
    // $('.login1').hide(400, 'linear');
    $('.login1').slideUp(400);

    
}

function popupOpen() {
    // $('.login1').show(400, '');
    $('.login1').slideDown(400, '');
    $('.login_root').css({
        width: "100%",
        height: "100%",
        backgroundcolor: "black"
    });
}