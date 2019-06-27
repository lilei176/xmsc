
$(function(){
  $.ajax({
    url:"header.html",
    type:"get",
    async:false,
    success:function(result){
      $(result).replaceAll("header");
      $(`<link rel="stylesheet" href="../css/header.css">`).appendTo("header")
      var uname=document.querySelector(".nav_center");
      var username=sessionStorage.getItem("uname")
      
      //用户名存在就更改按钮
      if(username){
        uname.innerHTML=`<a>${username}</a>
        <a href="javascript:;" id="logout">注销</a>`;
      var logout=document.getElementById("logout");
      logout.onclick=function(){
        sessionStorage.removeItem("uname");
        location.reload(); 
      }

      //获取uid发送ajax请求
      var uid=sessionStorage.getItem("uid");
      if(uid){
        $.ajax({
          url:"http://127.0.0.1:8080/shop/shop_car",
          type:"get",
          data:{uid},
          datatype:"json",
          success:function(result){
            //console.log(result.length);
             var shop=document.querySelector(".nav_right");
            shop.innerHTML=`<a href="shop-car.html" id="btn_car">购物车(${result.length})</a>`
            var btn_car=document.getElementById("btn_car");
            btn_car.onclick=function(){
              sessionStorage.setItem("uid",uid);
              sessionStorage.setItem("uname",$uname);
            }
          }
        })
      }
      
      }
    }
  })
})
