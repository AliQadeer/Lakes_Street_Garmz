$(document).ready(function () {
    $('#toggleMenu').click(function () {
        $('nav').toggleClass('show_menu');
    });
    $('.size li a').click(function () {
        // Remove active class from all menu items
        // $('.size li a').removeClass('active_size');

        // Add active class to the clicked menu item
        $(this).toggleClass('active_size');
    });
    $('.color_main a').click(function () {
        // Remove active class from all menu items
        $('.color_main a').removeClass('active_color');

        // Add active class to the clicked menu item
        $(this).addClass('active_color');
    });
});