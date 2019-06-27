 function click(){
  var $imgs=$(".img-subject>img");
  //console.log($imgs.length);
  var $btnleft=$(".btnl");
  var $btnright=$(".btnr");
  var $dlg=$(".lg>img.bigImg");
  //console.log($dlg)
  var moved=0;
  var $lis=$("#procus>ul>li");
  $lis.click(function(){
    $this=$(this);
   $this.addClass("selected").siblings().removeClass("selected");
  var $img=$this.attr("data-li");
  moved=$img.slice(3);
  var $lg=$this.attr("data-src");
  $(".lg>img.bigImg").attr("src",`../${$lg}`)
  //console.log( $(`#${$img}`))
  $(`#${$img}`).addClass("active").siblings().removeClass("active");
  })
  //console.log($imgs.attr("data-lg"))
  $btnleft.addClass("disabled");
  $btnright.click(function(){
    var $this=$(this);
    if($this.is(":not(.disabled)")){ 
      ++moved;
      $($imgs[moved]).addClass("active").siblings().removeClass("active")
      var $bts=$($imgs[moved]).attr("data-img");
      //console.log($bts)
      var $lgs=$($imgs[moved]).attr("data-lg");
      //console.log($lgs)
      $dlg.attr("src",`../${$lgs}`)
      $(`#${$bts}`).addClass("selected").siblings().removeClass("selected")
      // console.log(moved)
      $btnleft.removeClass("disabled")
    if(moved==$imgs.length-1){
      $btnright.addClass("disabled"); 
    }  
  }
})

  $btnleft.click(function(){
    var $this=$(this);
    if($this.is(":not(.disabled)")){ 
     --moved;
      $($imgs[moved]).addClass("active").siblings().removeClass("active") 
      var $bts=$($imgs[moved]).attr("data-img");
      //console.log($bts)
      var $lgs=$($imgs[moved]).attr("data-lg");
      //console.log($lgs)
      $dlg.attr("src",`../${$lgs}`)
      $(`#${$bts}`).addClass("selected").siblings().removeClass("selected")
      //console.log(moved)
      if(moved==0){
        $btnleft.addClass("disabled")
        $btnright.removeClass("disabled") 
      } 
  }
  }) 
  
}
 function pressbutton(){
  //单击按钮增加样式
  var $span=$(".box>span");
  $span.click(function(){
    $this=$(this);
    $this.addClass("active-border").siblings().removeClass("active-border")
  })  
 }

function magnifying(){
//放大镜效果
var $shade=$(".shade");
var $template=$(".template");
var $lg=$(".lg");
var $img=$(".lg .bigImg")
$shade.mousemove(function(e){
   $template.css("display","block");
  $lg.css("display","block");
 //console.log(e.offsetX,e.offsetY)
  e.offsetX<101?e.offsetX=101:e.offsetX>442?e.offsetX=442:false;
  /*if(e.offsetX<101){
    e.offsetX=101
  }else if(e.offsetX>442){
    e.offsetX=442
  }*/
  e.offsetY<100?e.offsetY=100:e.offsetY>442?e.offsetY=442:false
  /*if(e.offsetY<100){
    e.offsetY=100
  }else if(e.offsetY>442){
    e.offsetY=442;
  }*/
  $template.css("top",e.offsetY-100);
  $template.css("left",e.offsetX-100);
  $img.css("margin-top",`${-(e.offsetY-100)}px`);
  $img.css("margin-left",`${-(e.offsetX-100)}px`)
})
$shade.mouseout(function(){  
  $template.css("display","none");
  $lg.css("display","none")
})
}
//截取URL中的pid
var pid=location.search.split("=")[1]
//动态加载商品 根据pid
$.ajax({
  url:"http://127.0.0.1:8080/product/product_pid",
  type:"get",
  data:{pid},
  datatype:"json",
  success:function(result){
   // console.log(result);
    //console.log(result[0].img.split(","))
    var arr=result[0].img.split(",");
    console.log(arr)
    var html="";
    var n=0;
    var btn="";
    var lg=`<img src=${arr[0]} class="bigImg">`;
    for(var elem of arr){
      n++;
      html+=`<img src=${elem} data-img="b${n-1}"  height="540" width="540"/ id="img${n-1}" data-lg=${elem}>`
      btn+=`<li id="b${n-1}" data-li="img${n-1}" data-src=${elem}></li>`
    }
    $(".img-subject").html(html);
    $("#procus ul").html(btn); 
    $(".lg").html(lg) 
    var htmls=`<div>
    <h3>${result[0].title}</h3>
    <p>${result[0].subtitle}</p>
    <span>${result[0].autotrophy}</span>
    <span>${result[0].price}元</span>
</div>
<div>
  <img src="../image-commodity/weizhi.png" height="16" width="32"/>
    <span>湖北</span>
   <span>武汉市</span>
   <span>江岸区</span>
   <span>百步亭花园</span>
   <span class="active-span">修改</span>
   <p>有现货</p>
</div>
<div class="box">
    ${result[0].design}
</div>
<div class="model">
    <span>i7 16G 1050MAX-Q 256G</span>
    <span>${result[0].price} 元</span>
    <p>总计 ：${result[0].price}元</p>
</div>
<div class="btn-style">
    <a href="#">加入购物车</a>
    <a href="#">喜欢</a>
</div>
<div>
    <span><img src="../image-commodity/gou.png" height="20" width="30"/>小米自营</span>
    <span><img src="../image-commodity/gou.png" height="20" width="30"/>小米发货</span>
    <span><img src="../image-commodity/gou.png" height="20" width="30"/>7天无理由退货</span>
    <span><img src="../image-commodity/gou.png" height="20" width="30"/>运费说明</span>
</div>`
   $(".introduce").html(htmls);
   console.log( $(".introduce"));
   $("#procus ul li:first-child").addClass("selected");
   $(".img-subject img:first-child").addClass("active");
   click();
   magnifying();
   pressbutton();
  }
})