$(function () {
    $(".menu-toggle").on("click", function (e) {
        console.log("?")
        e.preventDefault();
        $(this).siblings("ul").slideToggle();
        $(this).find("i").toggleClass("fa-caret-down").toggleClass("fa-caret-up");

    });
    $("body").on("click", function (e) {
        if ($(e.target).parents(".main-menu").length < 1) {
            $(".main-menu ul").slideUp();
            $(".menu-toggle i").removeClacc("fa-caret-up"
            ).addClass(toggleClass("fa-caret-down"));
        }
    });
});
