$(function(){
    //生成验证码
    var chars=[];
    //向code中添加0-9
    for(var c=48;c<=57;c++){
        chars.push(String.fromCharCode(c));
    }
    //添加A-Z
    for(var c=65;c<=90;c++){
        chars.push(String.fromCharCode(c));
    }
    //添加a-z
    for(var c=97;c<=122;c++){
        chars.push(String.fromCharCode(c));
    }
    function getCode(){
        for(var i=0,code="";i<4;i++){
            var r=parseInt(Math.random()*62)
            code+=chars[r];
        }
        return code;
    }
    var code_str=getCode();
    //获取页面上的验证码span
    $("#reg-verify .verify_code").html(code_str);
    //获取更新验证码按钮
    $("#reg-verify a.reset").click(function(e){
        e.preventDefault();
        var code=getCode();
        $("#reg-verify .verify_code").html(code);
    });
    //ques3.onchange=function(){
    //    var sIndex=this.selectedIndex;
    //    console.log(this.options[sIndex].innerHTML);
    //    console.log(this.options[sIndex].value);
    //}
    //表单验证
    //获取表单
    var form=document.forms[0];
    //用户名验证
    //创建全局exist变量保存账号是否已存在
    var exist=0;
    var emailReg=/^\w+@\w+\.\w+(\.\w+)?$/;
    form.email.onblur=function(){
        var $this=this;
        vali(this,emailReg);
        $.ajax({
            type:"GET",
            url:"php/vali_user.php",
            data:{email:$this.value},
            success:function(data){
                var vali_email=document.getElementsByClassName("vali_email")[0];
                if(data.code===-1){
                    exist=-1;
                    form.email.focus();
                    $("#regForm div.vali_info").css("display","none");
                    vali_email.style.display="block";
                    $("#log_btn").click(function(e){
                        e.preventDefault();
                        location.href="login.html"
                    });
                }else{
                    exist=1;
                    vali_email.style.display="none";
                }
            }
        });
    }
    //var r=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    //var str="Wy900814";
    //验证密码
    var pwdReg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    form.pwd.onblur=function(){
        vali(this,pwdReg);
    }
    //验证确认密码
    form.pwd1.onblur=function(){
        var pwd=form.pwd.value;
        if(this.value==pwd){
            this.nextElementSibling.style.display="none";
        }else{
            $("#regForm div.vali_info").css("display","none");
            this.nextElementSibling.style.display="block";
        }
    }
    //验证姓名
    var uname=document.getElementsByClassName("vali_name")[0];
    form.first_name.onblur=function(){
        $("#regForm div.vali_info").css("display","none");
        valiName(this,uname);
    }
    form.last_name.onblur=function(){
        $("#regForm div.vali_info").css("display","none");
        valiName(this,uname);
    }
    //验证生日
    var birReg=/^\d{4}-\d{2}-\d{2}$/;
    form.birthDay.onblur=function(){
        $("#regForm div.vali_info").css("display","none");
        vali(this,birReg);
    }
    //安全问题1
    var ansReg=/^(\d|\w|[\u4e00-\u9fa5]){3,20}$/;
    form.ques1.onblur=function(){
        if(this.selectedIndex<1){
            $("#regForm div.vali_info").css("display","none");
            this.nextElementSibling.style.display="block";
        }else{
            this.nextElementSibling.style.display="none";
        }
    }
    form.answer_one.onblur=function(){
        vali(this,ansReg);
    }
    //安全问题2
    form.ques2.onblur=function(){
        if(this.selectedIndex<1){
            $("#regForm div.vali_info").css("display","none");
            this.nextElementSibling.style.display="block";
        }else{
            this.nextElementSibling.style.display="none";
        }
    }
    form.answer_two.onblur=function(){
        vali(this,ansReg);
    }
    //安全问题3
    form.ques3.onblur=function(){
        if(this.selectedIndex<1){
            $("#regForm div.vali_info").css("display","none");
            this.nextElementSibling.style.display="block";
        }else{
            this.nextElementSibling.style.display="none";
        }
    }
    form.answer_three.onblur=function(){
        vali(this,ansReg);
    }
    //公告信息
    form.news.onchange=function(){
        console.log(form.news.checked);

    }
    //验证码验证
    form.verifyword.onblur=function(){
        var codeStr=document.getElementsByClassName("verify_code")[0].innerHTML;
        if(this.value.toLowerCase()!=codeStr.toLowerCase()){
            $("#regForm div.vali_info").css("display","none");
            this.nextElementSibling.style.display="block";
        }else{
            this.nextElementSibling.style.display="none";
        }
    }
    function valiName(text,div){
        if(text.value==""){
            div.style.display="block";
        }else{
            div.style.display="none";
        }
    }
    function vali(txt,reg){
        var div=txt.nextElementSibling;
        if(!reg.test(txt.value)){
            $("#regForm div.vali_info").css("display","none");
            div.style.display="block";
        }else{
            div.style.display="none";
        }
    }
    //console.log(form.email);
    //提交表达验证
    var reg_btn=$("#reg_btn");
    //console.log(reg_btn);
    reg_btn.click(function(e){
        e.preventDefault();
        var email=form.email;
        var pwd=form.pwd;
        var pwd1=form.pwd1;
        var firstName=form.first_name;
        var lastName=form.last_name;
        var birthDay=form.birthDay;
        var sel1Index=form.ques1.selectedIndex;
        var sel2Index=form.ques2.selectedIndex;
        var sel3Index=form.ques3.selectedIndex;
        var ques1=$("#ques1 option:selected").html();
        var ques2=$("#ques2 option:selected").html();
        var ques3=$("#ques3 option:selected").html();
        var ans1=form.answer_one;
        var ans2=form.answer_two;
        var ans3=form.answer_three;
        var country=$("#sel_country option:selected").html();
        var codeStr=document.getElementsByClassName("verify_code")[0].innerHTML;
        var news;
        var itunes;
        if(form.news.checked){
            news=1;
        }else{
            news=-1;
        }
        if(form.itunes.checked){
            itunes=1;
        }else{
            itunes=-1;
        }
        function valiReg(text){
            text.focus();
            text.nextElementSibling.style.display="block";
        }
        if(email.value==""||!emailReg.test(email.value)){
            valiReg(email);
        }else if(pwd.value==""||!pwdReg.test(pwd.value)){
            $("#regForm div.vali_info").css("display","none");
            valiReg(pwd);
        }else if(pwd1.value==""||pwd1.value!=pwd.value){
            valiReg(pwd1);
        }else if(firstName.value==""){
            //valiReg(firstName);
            firstName.focus();
            $("#regForm div.vali_info").css("display","none");
            $("div.vali_name").css("display","block");
        }else if(lastName.value==""){
            valiReg(lastName);
        }else if(birthDay.value==""||!birReg.test(birthDay.value)){
            valiReg(birthDay);
        }else if(sel1Index<1){
            form.ques1.focus();
            form.ques1.nextElementSibling.style.display="block";
        }else if(sel2Index<1){
            form.ques2.focus();
            form.ques2.nextElementSibling.style.display="block";
        }else if(sel3Index<1){
            form.ques3.focus();
            form.ques3.nextElementSibling.style.display="block";
        }else if(ans1.value==""||!ansReg.test(ans1.value)){
            ans1.focus();
            ans1.nextElementSibling.style.display="block";
        }else if(ans2.value==""||!ansReg.test(ans2.value)){
            ans2.focus();
            ans2.nextElementSibling.style.display="block";
        }else if(ans3.value==""||!ansReg.test(ans3.value)){
            ans3.focus();
            ans3.nextElementSibling.style.display="block";
        }else if(form.verifyword.value.toLowerCase()!=codeStr.toLowerCase()){
            codeStr.focus();
            codeStr.nextElementSibling.style.display="block";
        }else if(exist===1){
            $.ajax({
                type:"POST",
                url:"php/user_add.php",
                data:{email:email.value,pwd:pwd.value,firstName:firstName.value,lastName:lastName.value,birthDay:birthDay.value,ques1:ques1,ans1:ans1.value,ques2:ques2,ans2:ans2.value,ques3:ques3,ans3:ans3.value,country:country,news:news,itunes:itunes},
                success:function(data){
                    if(data.code>0){
                        $("#reg_success h2").html(data.msg);
                        $("#reg_mask").css("display","block");
                        $("#reg_success").animate({opacity:1},500);
                        var num=5;
                        $("#reg_success span b").html(num);
                        var timer=setInterval(function(){
                            num--;
                            $("#reg_success span b").html(num);
                            if(num<=0){
                                clearInterval(timer);
                                location.replace("login.html");
                            }
                        },1000);
                        $("#reg_success a").click(function(e){
                            e.preventDefault();
                            clearInterval(timer);
                            location.href="login.html";
                        });
                    }else{
                        alert("错误代码:"+data.code+",原因"+data.msg);
                    }
                }
            });
        }
    });

});