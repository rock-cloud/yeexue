var step = "intro";
var windowHeight = 0, windowWidth = 0;
var onBodyReady = function() {
    //asynchronous load background image
    var bgImg = new Image();
    bgImg.id = "backgroundImg";
    bgImg.src = "image/bg3.jpg";
    $("#background").empty();
    $(bgImg).bind('load', function(){
        $('#background').append(bgImg);
        $('#background').css({
            "opacity":"0"
        });
        $('#background').animate({"opacity":"1"}, 1000);
    });
    //build whole page
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    if ( windowWidth > 1024 ) {
        var topLeft = (windowWidth-1024)/2;
    } else {
        $('#topbar').css({'left':'0px'});
    }
    if ( windowHeight > 600 ) {
        var guideTop = windowHeight/2-200-40;
        $('#guideList').css({'top':guideTop+"px"});
        $('#guideList').css({'padding-left':topLeft+"px"});
    } else {
        $('#guideList').css({'top':"80px"});
        $('#guideList').css({'padding-left':topLeft+"px"});
    }
    $('#guideList #introBlock').css({"margin-left":"300px"});
    $('#guideList').animate({
            'opacity':1
        }, 1000
    );
    $("#guideList #introBlock").animate(
        {"margin-left":"0px"},
        {duration:1000,easing:"easeOutBack"}
    );
    $("#guideList #gBlock1").animate(
        {"margin-left":"0px"},
        {duration:1000,easing:"easeOutBack"}
    );
} 

$(function() {
    onBodyReady();
});

$(window).resize(function() {
    onBodyReady();
});
