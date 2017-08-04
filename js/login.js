window.onload=function(){
    var logForm=document.forms[0];
    //验证账号
    logForm.AppleID.onblur=function(){
        var emailReg=/^\w+@\w+\.\w+(\.\w+)?$/;
        if(!emailReg.test(this.value)){
            $("div.vali_id").css("display","block");
        }else{
            $("div.vali_id").css("display","none");
        }
    }
    document.getElementById("log_btn").onclick=function(){
        var email=logForm.AppleID.value;
        var pwd=logForm.ApplePwd.value;
        $.ajax({
            type:"GET",
            url:"php/login.php",
            data:{email:email,pwd:pwd},
            success:function(data){
                //获取当前登录账号的姓名
                var fname=sessionStorage['loginfName']=data.fName;
                var lname=sessionStorage['loginlName']=data.lName;
                if(data.code>0){
                    $("#log_success h2").html(data.msg+","+fname+" "+lname);
                    $("#log_mask").css("display","block");
                    $("#log_success").animate({opacity:1},500);
                    var num=5;
                    $("#log_success span b").html(num);
                    var timer=setInterval(function(){
                        num--;
                        $("#log_success span b").html(num);
                        if(num<=0){
                            clearInterval(timer);
                            location.replace("index.html");
                        }
                    },1000);
                }else{
                    $("#uname").focus();
                    $(".vali_false").css("display","block");
                    logForm.AppleID.onblur=function(){
                        var emailReg=/^\w+@\w+\.\w+(\.\w+)?$/;
                        if(!emailReg.test(this.value)){
                            $("div.vali_id").css("display","block");
                        }else{
                            $("div.vali_id").css("display","none");
                            $(".vali_false").css("display","none");
                        }
                    }
                }
            }
        });
    }
}