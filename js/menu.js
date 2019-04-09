$(function () {
    $(".dong").toggle(
        function () {
            $(this).prev().children().last().css({height:"auto",overflow:"visible"});
            $(this).children().first().css({display:"none"});
            $(this).children().last().css({display: "block"});
            $(this).prev().addClass("change");
        },
        function () {
            $(this).prev().children().last().css({height:"0.4rem",overflow: "hidden"});
            $(this).children().first().css({display:"block"});
            $(this).children().last().css({display: "none"});
            $(this).prev().removeClass("change");
        }
    )
    $(".back").click(function () {
        $(".search_box").animate({opacity:0},"slow")
        $(".search_box").css({display:"none"});
    })
    $(".fixed_menu").click(function () {
        $(".search_box").animate({opacity:1},"slow")
        $(".search_box").css({display:"block"});
    })
})