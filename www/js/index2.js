var step = "intro";
var windowHeight = 0, windowWidth = 0;
var onBodyReady = function() {
    //asynchronous load background image
    var bgImg = new Image();
    bgImg.id = "backgroundImg";
    bgImg.src = "image/bg3.jpg";
    $("#background").empty();
    //build whole page
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    $(bgImg).bind('load', function(){
        $('#background').append(bgImg);
        $('#background').css({
            "opacity":"0"
        });
        $('#backgroundImg').css({"height":1131});
        $('#backgroundImg').css({"width":1694});
        $('#background').animate({"opacity":"1"}, 1000);
    });
   
    if ( windowWidth > 1024 ) {
        var topLeft = (windowWidth-1024)/2;
    } else {
        $('#topbar').css({'left':'0px'});
    }
    if ( windowHeight > 760 ) {
        var guideTop = windowHeight/2-200-100;
        $('#guideList').css({'margin-top':guideTop+"px"});
        $('#guideList').css({'padding-left':topLeft+"px"});
    } else {
        $('#guideList').css({'margin-top':"80px"});
        $('#guideList').css({'padding-left':topLeft+"px"});
    }
    $('#guideList #introBlock').css({"margin-left":"300px"});
    $('#guideList').animate({
            'opacity':1
        }, 1000
    );
    $("#guideList #introBlock").animate(
        {"margin-left":"0px"},
        {duration:2000,easing:"easeOutExpo"}
    );
} 

$(function() {
    onBodyReady();
});

$(window).resize(function() {
    onBodyReady();
});
