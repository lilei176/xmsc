(function(){
  var imgWidth=1250;
  var moved=0;
  var ul=document.getElementById("lunbo");
  var imgs=document.getElementsByClassName("lb");
  var btnleft=document.getElementsByClassName("arrows_left")[0];
  var btnright=document.getElementsByClassName("arrows_right")[0];
  var button=document.querySelectorAll(".origin>li");
  //定时器函数
  function task(){
    moved--;
    if(moved<-(imgs.length-1)){moved=0;}
    ul.style.left=(moved*imgWidth)+"px";
    btnShow();
  }
  var time=setInterval(task,2000);
  var box=document.getElementsByClassName("banner-position")[0];
  box.onmousemove=function(){
    clearInterval(time);
    time=null;
  }
  box.onmouseout=function(){
    time=setInterval(task,2000);
  }
  btnright.onclick=function(){
    task();
  }
  btnleft.onclick=function(){
    moved++;
    if(moved>0){moved=-(imgs.length-1);}
    ul.style.left=(moved*imgWidth)+"px";
    btnShow();
  }
  function btnShow(){
    var index=Math.abs(moved);
    for(var btn of button){
      if(btn.className==="active"){
        btn.className="";
      }
    }
    button[index].className="active";
  }
  for(var btn of button){
    btn.onclick=function(){
      var n=this.getAttribute("count");										
      for(var b of button){
        if(b.className==="active"){
          b.className="";        
        }		
        this.className="active";				
      }
      ul.style.left=-(n*imgWidth)+"px";
    }			
  }
})()

$(function(){
  var $hover=$(".right-gg");
  //console.log($hover)
  $hover.mouseover(function(){
   var $id=$(this).attr("data-hover");
   //console.log($id)
   $(this).addClass("selected").siblings().removeClass("selected"); 
   $(`#${$id}`).addClass("showblock").siblings().removeClass("showblock");
  })
  var $btnleft=$(".btnsleft-right>.left-btns");
  var  $btnright=$(".btnsleft-right>.right-btns");
  var $ulleft=$(".position-leftbtn")
  var $ul=$(".zheng");
  $btnleft.addClass("disabled");
  var mo=0; 
  $btnright.click(function(){
    var $this=$(this);
    if($this.is(":not(.disabled)")){
      mo++;
      $ulleft.css("left",-1260*mo);
      $btnleft.removeClass("disabled");
      if(mo==$ul.length-1){
        $this.addClass("disabled")
      }
    }
  })
  $btnleft.click(function(){
    var $this=$(this);
    if($this.is(":not(.disabled)")){
      mo--;
      $ulleft.css("left",-1260*mo);
      if(mo==0){
        $this.addClass("disabled");
        $btnright.removeClass("disabled");
      }
    }
  })
})
/*$(function(){
  var $leftbtn=$(".jiantouleft");
  var $rightbtn=$(".jiantouright");
  var $ul=$(".over-ul");
  console.log($ul)
  var lengths=$(".over-ul>li");
  //console.log(lengths)
  var $span=$(".fuhao>span");
  //console.log($span)
  $leftbtn.addClass("disabled");
  var model=0;
  $rightbtn.click(function(){
    var $this=$(this);
    if($this.is(":not(.disabled)")){
      model++;
      $ul.css("left",-258*model);
      var li=lengths[model];
      var $li=$(li)
      //console.log($li)
      var $sp=($li.attr("data-span"));
      console.log($sp)
      $(`#${$sp}`).addClass("spanhove").siblings().removeClass("spanhove")
      $leftbtn.removeClass("disabled");
      if(model==lengths.length-1){
        $this.addClass("disabled")
      }
    }
  })
  $leftbtn.click(function(){
    var $this=$(this);
    if($this.is(":not(.disabled)")){
      model--;
      $ul.css("left",-258*model);
      var li=lengths[model];
      var $li=$(li)
      //console.log($li)
      var $sp=($li.attr("data-span"));
      console.log($sp)
      $(`#${$sp}`).addClass("spanhove").siblings().removeClass("spanhove")
      if(model==0){
        $this.addClass("disabled");
        $rightbtn.removeClass("disabled");
      }
    }
  })
})*/
//侧边栏动态加载
$.ajax({
  url:"http://127.0.0.1:8080/index/index_img",
  type:"get",
  //data:{uid},
  datatype:"json",
  success:function(result){
    //console.log(result);
    var html="";
    for(var i=0;i<6;i++){
      html+=`
      <li><img src=${result[i].img} alt="" width="60px" height="60px"><a href="javascript:;">${result[i].title}</a></li>
    `
    }
    var uls=document.querySelectorAll(".option ul");
    for(var elem of uls){
      elem.innerHTML=html;
    }
  }
})

//导航栏手机动态加载
$.ajax({
  url:"http://127.0.0.1:8080/index/index_mi",
  type:"get",
  //data:{uid},
  datatype:"json",
  success:function(result){
   // console.log(result);
    var html="";
    for(var elem of result){
      //console.log(elem.img)
      html+=`<li>
      <div><a href="#"><img src="${elem.img}"/></a></div>
      <a class="title-a" href="#">${elem.title}</a>
      <p class="desc-p">${elem.subtitle}</p>
      <p class="price-p"><span>${elem.price}</span>元</p>
      <span class="flag">${elem.flag}</span>
    </li>`
    }
    var ul=document.querySelector(".phone-xiang .ul-zt").innerHTML=html;
  
  }
})

//获取页面内容
$.ajax({
  url:"http://127.0.0.1:8080/index/xm_product",
  type:"get",
 data:{pid:1},
  datatype:"json",
  success:function(result){
    //console.log(result);
    var html="";
    for(var i=0;i<4;i++){
      html+=`<li class="box-shadow">
      <div class="div-img"><a href="${result[i].href}"><img src="${result[i].img}" width="150" height="150"/></a></div>
      <a class="title-a" href="#">${result[i].title}</a>
      <p class="price-p"><span>${result[i].price}</span>元</p>
      <span class="flag">${result[i].flag}</span>
      <div class="show">
          ${result[i].show}
      </div>
    </li>`
    }
    var htmls="";
    for(var i=5;i<result.length;i++){
      htmls+=`<li class="box-shadow">
      <div class="div-img"><a href="${result[i].href}"><img src="${result[i].img}" width="150" height="150"/></a></div>
      <a class="title-a" href="#">${result[i].title}</a>
      <p class="price-p"><span>${result[i].price}</span>元</p>
      <span class="flag">${result[i].flag}</span>
      <div class="show">
          ${result[i].show}
      </div>
    </li>`
    }
    htmls+=`<li class="clear-padding">
    <div class="col_height width box">
      <div class="float-left xiao">
      <a class="title-a" href="#">小米净水机</a>
      <p class="price-p"><span>2999</span>元</p>
      </div>
      <div class="float-left xiao">
        <img class="img1" src="../image/pms_1521634907.16181074!220x220.jpg " width="80" height="80" alt="">
      </div>
    </div>
    <div class="col_height width m-t box">
      <div class="float-left img-top xiao">
        <p>浏览更多</p>
        <span class="more-small">热门</span>
      </div>
      <div class="float-left xiao">
        <img class="img2" src="../image/round_right.png"  width="48" height="48" alt="">
      </div>
    </div>
  </li>`
    document.getElementById("book-cart").innerHTML=html;
    document.getElementById("col-top").innerHTML=htmls;
  }
})