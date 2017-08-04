<?php
    header("Content-Type:application/json;charset=utf-8");
    @$email=$_REQUEST['email'] or die('{"code":-2,"msg":"用户邮箱不能缺少"}');
    @$pwd=$_REQUEST['pwd'] or die('{"code":-3,"msg":"用户密码不能缺少"}');
    require('init.php');
    $sql="SELECT * FROM user WHERE email='$email' AND pwd='$pwd'";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_assoc($result);
    if($row===null){
        echo '{"code":-1,"msg":"Apple ID账号或密码错误"}';
    }else{
        $fN=$row['firstName'];
        $lN=$row['lastName'];
        $uid=$row['id'];
        $str=["code"=>1,"msg"=>"登录成功!欢迎回来","fName"=>$fN,"lName"=>$lN,"uid"=>$uid];
        echo json_encode($str);
    }
?>