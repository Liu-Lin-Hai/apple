<?php
    header("Content-Type:application/json;charset=utf-8");
    @$email=$_REQUEST['email'] or die('{"code":-2,"msg":"用户邮箱是必须的"}');
    require('init.php');
    $sql="SELECT email FROM user WHERE email='$email'";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_assoc($result);
    //var_dump($row);
    if($row!=null){
        $str=["code"=>-1,"msg"=>"该用户已注册,请用该账号直接登录"];
        echo json_encode($str);
    }else{
        $str=["code"=>1,"msg"=>"该邮箱可以使用"];
        echo json_encode($str);
    }
?>