<?php
    header("Content-Type:application/json;charset=utf-8");
    @$email=$_REQUEST['email'] or die('{"code":-2,"msg":"用户电子邮箱是必须的"}');
    @$pwd=$_REQUEST['pwd'] or die('{"code":-3,"msg":"用户密码不能缺少"}');
    @$firstName=$_REQUEST['firstName'] or die('{"code":-4,"msg":"用户姓氏不能缺少"}');
    @$lastName=$_REQUEST['lastName'] or die('{"code":-5,"msg":"用户名字不能缺少"}');
    @$birthDay=$_REQUEST['birthDay'] or die('{"code":-6,"msg":"用户名字不能缺少"}');
    @$ques1=$_REQUEST['ques1'] or die('{"code":-7,"msg":"提示问题1不能缺少"}');
    @$ans1=$_REQUEST['ans1'] or die('{"code":-8,"msg":"答案1不能缺少"}');
    @$ques2=$_REQUEST['ques2'] or die('{"code":-9,"msg":"提示问题2不能缺少"}');
    @$ans2=$_REQUEST['ans2'] or die('{"code":-10,"msg":"答案2不能缺少"}');
    @$ques3=$_REQUEST['ques3'] or die('{"code":-11,"msg":"提示问题3不能缺少"}');
    @$ans3=$_REQUEST['ans3'] or die('{"code":-12,"msg":"答案3不能缺少"}');
    @$country=$_REQUEST['country'] or die('{"code":-13,"msg":"所属国家不能缺少"}');
    @$news=$_REQUEST['news'] or die('{"code":-14,"msg":"是否推送不能缺少"}');
    @$itunes=$_REQUEST['itunes'] or die('{"code":-15,"msg":"是否获取更新不能缺少"}');
    require('init.php');
    $sql="INSERT INTO user VALUES(null,'$email','$pwd','$firstName','$lastName','$birthDay','$ques1','$ans1','$ques2','$ans2','$ques3','$ans3','$country',$news,$itunes,now())";
    $result=mysqli_query($conn,$sql);
    if($result===true){
        $str=["code"=>1,"msg"=>"用户创建成功^_^"];
        echo json_encode($str);
    }else{
        $str=["code"=>-1,"msg"=>"用户创建失败:("];
        echo json_encode($str);
    }
?>