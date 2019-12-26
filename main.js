$(document).ready(function () {
    $('.hamburger-menu').on('click', function() {
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open')
    });

    AOS.init({
        easing: 'ease',
        duration: 1000
    });


    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#mybtn').fadeIn();;
        } else {
            $('#mybtn').fadeOut();
        }
    });

    //Click event to scroll to top
    $('#mybtn').on('click', function(){
        console.log('abc')
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });


});