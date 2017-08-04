/**
 * Created by uid on 2017/6/17.
 */
window.onload=function(){
    setTimeout(function () {
        $("#ipad-pro>.ipad-rel").addClass("animate fadeIn");
    },2000);
    $("#ipad-pro>p>img").each(function (i, dom) {
        var el=$(this);
        setTimeout(function () {
            el.addClass("fadeDown animate");
        },i*500,"easeInOutExpo");
    });

    $(".pencil,.keyboard").waypoint(function () {
        $(".pencil").addClass("animate fadeLeft");
        $(".keyboard").addClass("animate fadeRight");
        setTimeout(function () {
            $("#pencil-keyboard .ipad-rel").addClass("zoomIn");
        },1000)
    },{offset:"90%"});
    $("#ipad").waypoint(function () {
        $("#ipad>.ipad-rel").addClass("animate slideUp");
        setTimeout(function () {
            $("#ipad>p").find("img").eq(3).animate({"opacity":"1"},"slow", function () {
                $(this).prev().animate({"opacity":"1"},"slow", function () {
                    $(this).prev().animate({"opacity":"1"},"slow", function () {
                        $(this).prev().animate({"opacity":"1"},"slow")
                    })
                });
            });
        },800);
    },{offset:"90%"});
    $("#app-swift").waypoint(function () {
        $("#app-swift .ipad-rel").children().each(function (index, value) {
            //console.log(value);
            var el=$(this);
            el.css({"opacity":"0"});
            setTimeout(function () {
                el.addClass("animate rotateInUpLeft");
            },index*50,"easeInOutExpo");
        });
    },{offset:"90%"});
    $("#ipad-ios10").waypoint(function () {
        var ios_num=1;
        $("#ipad-ios10 .ios-version b").html(ios_num);
        var timer=setInterval(function () {
            if(ios_num<10){
                ios_num++;
                $("#ipad-ios10 .ios-version b").html(ios_num);
            }else{
                ios_num=10;
                clearInterval(timer);
            }
        },100);
        setTimeout(function () {
            $("#ipad-ios10>.ipad-rel .ios-version").siblings().addClass("zoomIn");
        },1000)
    },{offset:"90%"});
    $("#ipad-relatively").waypoint(function () {
        $("#ipad-relatively").addClass("animate rollIn");
    },{offset:"90%"});
    $(".floor").each(function (index) {
        var el=$(this);
        el.waypoint(function () {
            setTimeout(function () {
                el.addClass("zoomIn");
            },index*200,"easeInOutExpo");
        },{offset:"90%"});
    })
}