(function(){
  //切换
  $(".message-phone").click(function(){
   $(this).parent().addClass("hidd").next().removeClass("hidd").addClass("show")
  })
  $(".message-uname").click(function(){
    $(this).parent().addClass("hidd").prev().removeClass("hidd").addClass("show")
  })

  //表单验证
  $("button.btn-uname").click(function(){
    var $uname=$(".uname").val()
    var $upwd=$(".upwd").val()
    var unamereg=/^[a-zA-Z0-9]{3,12}$/;
    var reg=/^\s*$/;
    var upwdreg=/^[a-zA-Z0-9]{3,9}$/;
    var $p=$(".alert");
    //console.log($uname,$upwd)
    if(reg.test($uname)){
      $p.html("用户名不能为空");     
    }else if(reg.test($upwd)){
      $p.html("密码不能为空");   
    }else if(!unamereg.test($uname)){
      $p.html("用户名错误");   
    }else if(!upwdreg.test($upwd)){
      $p.html("密码错误");
    }else{
      $p.html("");
      $.ajax({
        url:"http://127.0.0.1:8080/user/login",
        type:"post",
        data:{uname:$uname,upwd:$upwd},
        datatype:"json",
        success:function(result){
          console.log(result.data[0].uid);
          if(result.code==1){
            sessionStorage.setItem("uname",$uname);
            sessionStorage.setItem("uid",result.data[0].uid)
            alert("登录成功,1秒后自动跳转到首页")    
            setTimeout(()=>{
              $(location).attr('href','index.html');
            },1000)
          }else{
            $p.html("用户名不存在或密码错误")
          }   
        }
      })
    }
  })
  $("button.btn-phone").click(function(){
    var $phone=$(".phone").val()
    var $message=$(".message>input").val()
    var unamereg=/^[1][3,4,5,7,8][0-9]{9}$/;
    var reg=/^\s*$/;
    var upwdreg=/^[a-zA-Z0-9]{4}$/;
    var $p=$(".alert-phone");
    //console.log($phone,$message)
    if(reg.test($phone)){
      $p.html("手机号不能为空");     
    }else if(reg.test($message)){
      $p.html("短信验证码不能为空");   
    }else if(!unamereg.test($phone)){
      $p.html("手机号错误");   
    }else if(!upwdreg.test($message)){
      $p.html("短信验证码错误");
    }else{
      $p.html("");
      $.ajax({
        url:"http://127.0.0.1:8080/user/login_phone",
        type:"post",
        data:{phone:$phone,note:$message},
        datatype:"json",
        success:function(result){
          // console.log(result);
          if(result.code==1){
            
            $(location).attr('href','index.html');
         
          }else{
            $p.html("手机号不存在或验证码错误")
          }   
        }
      })
    }
  })
})()

