$(function(){
  $(".city").click(function(){
    var $this=$(this)
    //找到当前触发事件元素的下一个兄弟
    $this.next().removeClass("hide").addClass("show");
  })
  $(".state>ul>li").click(function(){
    var $this=$(this);
    //console.log($this.html())
    //获取当前元素的内容
    var html=$this.html()
    //添加到指定位置 
    $(".city-click").html(`${html}`);
    //当前城市列表隐藏
    $(".state").addClass("hide").removeClass("show");
  })
  $(".city").click(function(){
    var $this=$(this)
    //找到当前触发事件元素的下一个兄弟
    $this.next().removeClass("hide").addClass("show");
  })


  //2.
  $(".phone-code").click(function(){
    var $this=$(this)
    //找到当前触发事件元素的下一个兄弟
    $this.parent().next().removeClass("hide").addClass("show");
  })
  $(".code ul li").click(function(){
    var $this=$(this);
    //console.log($this.html())
    //获取当前元素的内容
    var html=$this.html()
    console.log(html)
    //添加到指定位置 
    $(".phone-code").html(`${html}`);
    //当前城市列表隐藏
    $(".code").addClass("hide").removeClass("show");
  })

  //注册验证切换下一步
  
  $("#zhun").click(function(){
    var bool=$(this).prop("checked"); 
    if(bool){
      $(".btn-phone").prop("disabled",false);
      $(".err").html("")
    }else{
      $(".err").html("请您同意用户条款")
      $(".btn-phone").prop("disabled",true);
    }
  })
  
  $(".btn-phone").click(function(){
    var $this=$(this);
    var $phone=$("#phone input").val();
    var reg=/^[1][3,4,5,7,8][0-9]{9}$/;
    console.log($phone);
    if(!reg.test($phone)){
      $(".err").html("输入的手机号码格式错误")
    }else{
      $(".err").html("手机号通过验证");
      $(".wrap-input").addClass("hidden").next().removeClass("hidden");   
    }
  })
  $(".regis").click(function(){
      var $uname=$(".muser>input").val();
      console.log($uname);
      var $upwd=$(".upwd>input").val();
      console.log($upwd);
      var unamereg=/^[a-zA-Z0-9]{3,12}$/; //用户名正则
      var upwdreg=/^[a-zA-Z0-9]{3,9}$/;  // 密码正则
      var reg=/^\s*$/;
      if(reg.test($uname)){
        $(".err").html("用户名不能为空");     
      }else if(reg.test($upwd)){
        $(".err").html("密码不能为空");   
      }else if(!unamereg.test($uname)){
        $(".err").html("用户名格式错误");   
      }else if(!upwdreg.test($upwd)){
        $(".err").html("密码格式错误");
      }else{
        $(".err").html("");
        $.ajax({
          url:"http://127.0.0.1:8080/user/register",
          type:"post",
          data:{uname:$uname,upwd:$upwd},
          datatype:"json",
          success:function(result){
            console.log(result);
            if(result.code==-1){
              alert(`${result.msg}`)             
            }else{
              $(".err").html("用户名可以使用");
              $(location).attr('href','login.html');
            }   
          }
        })
      }
  })

})