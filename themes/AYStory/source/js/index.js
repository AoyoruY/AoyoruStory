$(document).ready(function(){
    var scrollH = $(document).scrollTop();
    var targetH = $('header').height();
    if (scrollH > targetH) {
        $(".filter").fadeOut(500);
        $(".noticeBox").addClass("noticeBoxFixed").slideDown();
    }
}).scroll(function(){
    var scrollH = $(document).scrollTop();
    var targetH = $('header').height();
    if (scrollH > targetH) {
        $(".filter").fadeOut(500);
        $(".noticeBox").addClass("noticeBoxFixed");
    }
    if (scrollH < targetH) {
        $(".filter").fadeIn(450);
        $(".noticeBox").removeClass("noticeBoxFixed");
    }
})


