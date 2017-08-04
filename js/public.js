//请求全站导航栏和尾部
$(function(){
    //请求头
    $("#nav").load("php/header.php",function(){
        $("#nav-list").addClass("fadeRight");
        //index
        //获取导航栏中的购物袋元素的li
        //获取id为dropDown的li
        var $dropDown=$("#dropdown");
        //获取id为menu-list的ul
        var $div=$("#dropdown>div");
        var $menu_list=$("#menu-list");
        $dropDown.children("a").click(function(e){
            e.preventDefault();
            if($div.hasClass("pop")){
                $div.removeClass("pop");
            }else{
                $div.addClass("pop");
            }
        });
        $div.hover(function(){
            $(this).addClass("pop");
        },function(){
            $(this).removeClass("pop")
        });
        $("#nav-list>li>a").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        })
    });
    //请求尾
    $("#footer").load("php/footer.php");
})
//导航下的分类
//iphone分页
//找到id为product-list下的ul下的li
var lis=document.querySelectorAll("#product-list>ul>li");
var ul_phone=document.querySelector("#product-list>ul");
//遍历lis
for(var i=0;i<lis.length;i++){
    (function(i){
        lis[i].onmouseover=function(){
            var li=document.querySelector("#product-list>ul>li.pulse");
            if(li!==null){
                li.className="";
                this.className="pulse";
            }else if(this.className=="pulse"){
                this.className="";
                this.className="pulse";
            }else{
                this.className="pulse";
            }
        }
    }(i));
}
for(var i=0;i<lis.length;i++){
    lis[i].onmouseout=function(){
        this.className="";
    }
}
//ipad分页
var ipad_lis=document.querySelectorAll("#ipad-product-list>ul>li");
for(var i=0;i<ipad_lis.length;i++){
    (function(i){
        ipad_lis[i].onmouseover=function(){
            var li=document.querySelector("#ipad-product-list>ul>li.pulse");
            if(li!==null) {
                li.className="";
                this.className = "pulse";
            }else if(this.className==""){
                this.className="pulse";
            }
        }
    }(i));
}
//遍历ipad-lis
for(var i=0;i<ipad_lis.length;i++){
    ipad_lis[i].onmouseout=function(){
        this.className="";
    }
}
