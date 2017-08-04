$(function(){
    var $h2=$(".b-to-t").find("h2");
    $h2.eq(0).animate({"opacity":1},1000);
    $h2.eq(1).animate({"opacity":1},3000);
    $(".b-to-t").find("a").animate({"opacity":1},4000);
    $(".b-to-t").find("p").animate({"opacity":1},6000);
    $(".ip7-black").animate({"opacity":1,"bottom":0},3000);
    //滚轮事件
    //$("#iphone7-red").css("display","none");
    var redFs=true;
    var purFs=true;
    var airpodsFS=true;
    var relaFS=true;
    var joinFS=true;
    var busFS=true;
    $(window).scroll(function(){
        //var redH=$("#iphone-red").offsetTop;
        //获取可视窗口的高度
        var viewH=$(window).height();
        //获取滚轮的高度
        var winH=$(window).scrollTop();
        //获取iphone7-red板块的top值
        var iphoneRedH=$("#iphone7-red").offset().top;
        //iphone-red板块
        if(winH+viewH>=iphoneRedH){
            if(redFs){
                $("#iphone7-red>.floor").stop().animate({"left":0,"width":"100%"},1000,function(){
                    $(this).find("div").css("display","block")
                        .animate({"opacity":1},400)
                        .animate({"top":"20%"},400)
                        .animate({"top":"33%"})
                        .animate({"top":"25%"})
                        .animate({"top":"33%"})
                        .animate({"top":"28%"})
                        .animate({"top":"33%"});
                    $(this).find("img").animate({"left":"10%"},400)
                        .animate({"left":"2%"},500)
                        .animate({"left":"10%"},400)
                        .animate({"left":"5%"},400)
                        .animate({"left":"10%"},400)
                        .animate({"left":"8%"},400)
                        .animate({"left":"10%"},300);
                });
                redFs=false;
            }
        }
        //iphone-purple板块
        var iphonePurH=$("#iphone7-purple").offset().top;
        if(winH+viewH>=iphonePurH){
            if(purFs){
                $("#iphone7-purple>.floor").css("display","block")
                    .animate({"opacity":1})
                    .find("p")
                    .animate({
                        "top":"0%",
                        "opacity":1,
                        "height":"460px"
                    },1000,function(){
                        $(this).find("img:nth-child(2)").animate({"opacity":1},1000,function(){
                            $(this).prev().animate({"right":"43%","opacity":1},1000);
                            $(this).next().animate({"right":"4%","opacity":1},1000);
                            $(this).parent().next().find("span")
                                .animate({"opacity":1,"top":"-2%"},700,function(){
                                    $(this).next()
                                        .animate({"opacity":1,"top":"3%"},500,function(){
                                            $(this).next().animate({"top":"17%","opacity":1},500,function(){
                                                $(this).next().animate({"top":"25%","opacity":1},500)
                                            })
                                        });
                                })
                        });

                    });
                purFs=false;
            }
        }
        //airpods-mountings板块
        var airpodsH=$("#airpods-mountings").offset().top;
        if(winH+viewH>=airpodsH){
            if(airpodsFS){
                $("#airpods-mountings>div.airpods>div").addClass("flyRight");
                $("#airpods-mountings>div.mountings>div").addClass("flyLeft");
            }
        }
        //iphone7-relatively板块
        var relativeH=$("#iphone7-relatively>.floor").offset().top;
        if(winH+viewH>relativeH){
            if(relaFS){
                $("#iphone7-relatively>.floor").animate({"height":"460px","width":"70%"},1000,function(){
                    $(this).find("div").animate({"opacity":1},500,function(){
                        $(this).next().find("li").eq(0).animate({"left":"2%","opacity":"1"},500,function(){
                            $(this).next().animate({"left":"32%","opacity":"1"},500,function(){
                                $(this).next().animate({"left":"52%","opacity":"1"},500,function(){
                                    $(this).next().animate({"left":"70%","opacity":"1"},500,function(){
                                        $(this).next().animate({"left":"86%","opacity":"1"},500,function(){
                                            var lis=$(this).parent().find("li");
                                            for(var i=0;i<lis.length;i++){
                                                var obj=lis[i];
                                                $(obj).addClass("afterShow");
                                            }
                                        })
                                    })
                                })
                            })
                        });
                    });
                });
            }
            relaFS=false;
        }
        //join-iphone板块
        var joinH=$("#join-iphone").offset().top;
        if(winH+viewH>joinH){
            if(joinFS){
                $(".join-iphone>p>img").animate({"max-height":"100%",top:"35%","opacity":"1"},1500,function(){
                    $(".new-iphone>p>img:last-child").animate({"bottom":0,"opacity":1},1000);
                    $(".join-iphone>ul>li").eq(0).animate({"opacity":"1"},300,function(){
                        $(this).next().animate({"opacity":"1"},300,function(){
                            $(this).next().animate({"opacity":"1"},300,function(){
                                $(this).next().animate({"opacity":"1"},300,function(){
                                    $(this).next().animate({"opacity":"1"},300)
                                })
                            })
                        })
                    })
                });
            }
            joinFS=false;
        }

        //var payH=$("#iphone")
        ////iPhone 7-business板块
        //var businessH=$("#iphone7-business").offset().top;
        //if(winH+viewH>businessH){
        //    if(busFS){
        //        $("#iphone7-business").addClass("fadeIn");
        //    }
        //apple-pay板块
        var buyH=$("#how-buy>div.floor").offset().top;
        if(winH+viewH>buyH){
            $("#how-buy>div.floor").addClass("flipInX");
        }
        var h2s=$("#how-buy>div.floor>div");
        $.each(h2s, function (i, dom) {
            if(winH+viewH>$(dom).offset().top){
                $(dom).addClass("flipInY");
            }
        })
        var floors=$(".floorEnd");
        $.each(floors, function (i, dom) {
            if(winH+viewH>$(dom).offset().top){
                $(dom).addClass("fadeIn");
            }
        })
    })

})