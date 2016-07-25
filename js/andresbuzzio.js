$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 100) {
        $('.square').css("visibility","visible");
        $('.square').addClass('magictime slideLeftRetourn');
    }
});
