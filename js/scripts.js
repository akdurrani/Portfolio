/* Source: https://stackoverflow.com/questions/54164397/bootstrap-4-how-to-make-fixed-top-navbar-disappear-on-scroll */

var prevScrollpos = window.pageYOffset;
$(window).scroll(function(e) {

    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos) {
        $('.navbar').addClass("navbar-hide");
    } else {
        $('.navbar').removeClass("navbar-hide");
    }
    prevScrollpos = currentScrollPos;

});