
// Scroll to top slow
$('#back-to-top').click(function(){
    $('html, body').animate({scrollTop:0}, 'slow');
});

$('#c-me').click(function(){
    $("html, body").animate({ scrollTop: document.body.scrollHeight }, "slow");
});

// Nav Bar change to solid color on scroll
$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

// Activate scroll to top
$(window).scroll(function() {
    $('#back-to-top').toggleClass('scroll', $(this).scrollTop() > 50);
});

// Remove brand shadow on scroll
$(window).scroll(function() {
    $('.brand').toggleClass('scroller', $(this).scrollTop() > 50);
});



// Scrollspy
$document.ready(function(){
    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
        }); 
});

$('body').scrollspy({ target: '#navbarTogglerDemo02' });

