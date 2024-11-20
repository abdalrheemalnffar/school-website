$(document).ready(function () {

    $(".lii").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })

    // aside code
    $(".bar").click(function () {
        $(".contaner-box").delay(0).fadeIn(1500)
        $("aside").animate({
            left: "0"
        }, 1500)

    })
    $(".close").click(function () {
        $(".contaner-box").fadeOut(1000)
        $("aside").animate({
            left: "-100%"
        }, 1500)
    })


});
