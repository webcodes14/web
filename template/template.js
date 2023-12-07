


$(function() {
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".desktop, .bg-close-menu").addClass("bg-on-scroll");
        } else {
            $(".desktop, .bg-close-menu").removeClass("bg-on-scroll");
        }
    });


    $(".navbar-mobile").on("click", ".navbar-open, .navbar-close", function() {
        $(".navbar-collapse").toggleClass("active");
        $(".navbar-collapse").find(".social-nav-active").removeClass("social-nav-active");
    });

    $(".navbar-mobile").on("click", ".social-nav-mobile > button", function() {
        $(this).next().toggleClass("social-nav-active");
    });

    /* Desktop menu + Theme + Language */
    $(".navbar-desktop").on("click", ".navbar-toggler", function() {
        $(this).next().toggleClass("navbar-active");
    });

    $(".navbar-desktop, .navbar-mobile").on("click", ".navbar-lang-theme > li img", function() {
        if ($(this).attr("src") === "media/picture/icon-usa.png") {
            $(this).attr("src", "media/picture/icon-czech-republic.png");
            $(this).parent().removeClass().addClass("language-cs");
        } else {
            $(this).attr("src", "media/picture/icon-usa.png")
            $(this).parent().removeClass().addClass("language-en");
        }
    });

    $(".navbar-desktop, .navbar-mobile").on("click", ".navbar-lang-theme > li i", function() {
        if ($(this).hasClass("fa-regular fa-moon")) {
            $(this).removeClass().addClass("fa-solid fa-sun");
            $(this).parent().removeClass().addClass("theme-dark");
        } else {
            $(this).removeClass().addClass("fa-regular fa-moon");
            $(this).parent().removeClass().addClass("theme-light");
        }
    });



    changeLink(".navbar-mobile", ".navbar-nav > li a");
});


function changeLink(parent, links) {
    $(parent).on("click", links, function() {
        if($(links).parent().hasClass("active")) {
            $(links).parent().removeClass("active");
            $(this).parent().addClass("active");
        }
    });
}/*<a href="#"><i class="fa-solid fa-sun"></i></a>*/