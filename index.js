var menuOpened = false;
$('.navbar-toggler').click(function () {
    $('body').toggleClass("greyBg");
    if (menuOpened == false) {
        $('.navbar-toggler-icon').removeClass("ham");
        $('.navbar-toggler-icon').addClass("cross");
        menuOpened = true;
    }
    else {
        $('.navbar-toggler-icon').removeClass("cross");
        $('.navbar-toggler-icon').addClass("ham");
        menuOpened = false;
    }
});
