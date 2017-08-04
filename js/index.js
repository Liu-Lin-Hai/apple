$(function(){
    //轮播
    var i=0;
    //获取window的宽度
    var wWidth=$(window).width();
    //获取li的宽度
    $("#banner>li").width(wWidth);
    var $liWidth=wWidth;
    //克隆第一张的的图片
    var $clone=$("#banner>li:first-child").clone();
    //放到ul的最后面
    $("#banner").append($clone);
    //获取li的个数
    var $size=$("#banner>li").size();
    //ul的宽度设为,li的宽度*li的个数
    $("#banner").width($liWidth*$size);
    $(window).resize(function(){
        //clearInterval(timer);
        //timer=null;
        var nowWidth=$(this).width();
        $("#banner>li").width(nowWidth);
        $liWidth=nowWidth;
        $("#banner").width($liWidth*$size);
        //timer=setInterval(function(){
        //    ToLeft();
        //},2000);
    });
    var timer=setInterval(function(){
        ToLeft();
    },2000);
    $("#banner-tabs>a").first().addClass("active");
    //获取左按钮,图片往右移动
    $("#prev").click(function(){
        //右移函数
        ToRight();
    });
    //获取右按钮,图片往左移动
    $("#next").click(function(){
        //左移函数
        ToLeft();
    })
    //tabs按钮的点击事件
    $("#banner-tabs>a").click(function(){
        //当点击这个当前按钮时,i=当前按钮的索引(下标)
        i=$(this).index();
        //banner左移距离为-i*图片的宽度
        $("#banner").animate({left:-i*$liWidth});
        //给当前的按钮添加class,其他的兄弟按钮移出class
        $(this).addClass("active").siblings().removeClass("active");
    })
    //#container的鼠标移入移出事件
    $("#container").hover(function(){
        //移入时清空定时器
        clearInterval(timer);
        timer=null;
        //给左右按钮添加class为显示
        $("#container>img").addClass("show");
    },function(){
        //移出时重置定时器
        timer=setInterval(function(){
            ToLeft();
        },2000);
        //给左右按钮移除class
        $("#container>img").removeClass("show");
    });
    //设置定时器,为2秒,默认操作调用图片往左移函数

    //右按钮事件函数
    function ToLeft(){
        //每调用一次函数,i++
        i++;
        //console.log(i);
        //判断i是不是等于最后一张图片(最早那一张)
        if(i>$size-1){
            //当当前的图片为最后一张图片的时候,用left设为0,把banner切换到最初的一张图片,下一次点击就会从第二张图片开始
            //
            $("#banner").css({left:0});
            //把i赋值为1,下次点击就会是-1*图片宽
            i=1;
        }
        $("#banner").stop().animate({left:-i*$liWidth},1000);
        //当当前图片为最后一张的时候
        if(i==$size-1){
            //把tabs的第一个按钮添加class,移除其他兄弟按钮的class
            $("#banner-tabs>a").eq(0).addClass("active").siblings().removeClass("active");
        }else{
            //否则的话,当前下标为i的按钮添加class,移除其他兄弟按钮的class
            $("#banner-tabs>a").eq(i).addClass("active").siblings().removeClass("active");
        }
    }
    //左按钮事件函数
    function ToRight(){
        //每调用一次i--
        i--;
        //如果当前图片为第一张图片
        if(i==-1){
            //利用css切换到最初复制的最后一张图片的位置
            //left为li的个数-1*图片的宽度,为最后一张图的位置
            $("#banner").css({left:-($size-1)*$liWidth});
            //把i赋值为li的个数-2,下一次
            i=$size-2;
        }
        $("#banner").stop().animate({left:-i*$liWidth},1000);
        $("#banner-tabs>a").eq(i).addClass("active").siblings().removeClass("active");
    }
    //promos部分
    var liList=document.querySelectorAll("ul.banner-list li");
    for(var a=0;a<liList.length;a++){
        (function(a){
            liList[a].onmouseenter=function(e){
                var style=getComputedStyle(this);
                var lw=style.width;
                var lh=style.height;
                var ll=this.offsetLeft;
                var lt=this.offsetTop;
                console.log(this.offsetTop);
                var mask=document.getElementsByClassName("promos-mask")[0];
                //this.firstElementChild.firstElementChild.style.transform="scale(1.1)";
                mask.style.width=lw;
                mask.style.height=lh;
                mask.style.left=ll+"px";
                mask.style.top=lt+"px";
            }
        }(a))
    }
    document.getElementsByClassName("banner-list")[0].onmouseleave=function(){
        var mask=document.getElementsByClassName("promos-mask")[0];
        mask.style.height=0;
        mask.style.width=0;
    }
});

