
var uid=sessionStorage.getItem("uid");
var uname=sessionStorage.getItem("uname");
if(uname){
    var div=document.querySelector(".login");
    div.innerHTML=` <a href="#">欢迎回来</a>
    <span>丨</span>
    <a href="#">${uname}</a>`
}
function load(){
$.ajax({
    url:"http://127.0.0.1:8080/shop/shop_car",
    type:"get",
    data:{uid},
    datatype:"json",
    success:function(result){
     console.log(result.length);
      var html="";
      var sum=0,con=0;
      for(var i=0;i<result.length;i++){
        html+=`<div class="shop-column"> 
        <div class="shop-basket-list">
            <div class="shop-check_all">
                <input class="shop-option shop-option-list" type="checkbox" checked >
            </div>
            <div class="shop-img">
                <img src="${result[i].img}" alt="" height="80" width="80">
            </div>
            <div class="shop-title">
                ${result[i].title}</div>
            <div class="shop-price">${result[i].price}元</div>
            <div class="shop-count">
                <div class="shop-count-border">
                    <a href="javascript:;"><div>-</div></a>
                    <span>${result[i].count}</span>
                    <a href="javascript:;"><div>+</div></a>
                </div>
                <p class="shop-count-p">还可买8件</p>
            </div>
            <div class="shop-total total">${result[i].total}元</div>
            <div class="shop-operate">
                <a class="shop-operate-x" href="javascript:;" data-pid=${result[i].pid}>×</a>
            </div>
        </div></div>`
        sum+=parseInt(result[i].total);
        con+=result[i].count;
      }
      //console.log(sum,con)
    var shop=document.getElementById("car");
    shop.innerHTML=html; 
    document.querySelector(".buy-count").innerHTML=`共 <i>${con}</i> 件商品，已选择 <i>${con}</i> 件`  
    document.querySelector(".settle-accounts-right2").innerHTML=`${sum}` ;
    click();
    del();
    chbAll();  
}
})
}
load();
function click(){
//先找到改变商品数量的元素
var btns=document.querySelectorAll(".shop-count-border a div");
//console.log(btns);
for(var btn of btns){ 
    //当 单击 btn按钮时，自动执行后续任务
    btn.onclick=function(){
        //console.log(123)
        //找到当前按钮
        var btn=this;
        //console.log(btn);
        //找到当前按钮旁边的span
        var inp=btn.parentElement.parentElement.childNodes[3];
       //console.log(inp);
        //取出span内容
        var n=parseInt(inp.innerHTML);
        //console.log(n);
        //获取剩余数量
        var shopCount=parseInt(btn.parentNode.parentNode.nextElementSibling.innerHTML.slice(3,-1));
        //console.log(shopCount);
        //如果当前按钮时+
        if(btn.innerHTML=="+"){//就给span的内容+1
            if(shopCount>0){
                n++;
               // console.log(n);
                shopCount--;
                
            }else{
                btn.disabled=true;
            }
        }else if(btn.innerHTML=="-"){
        //否则,只有n>1
           if(n>1){ //就给span的内容-1
            n--;
            shopCount++;
            }
        }    //将n放回span的内容
           // console.log(n);
            btn.parentNode.parentNode.nextElementSibling.innerHTML=`还可买${shopCount}件`;
            inp.innerHTML=n;
            //二.数量变化，计算小计
            //获得单价所在的td:btn的爹的前一个兄弟
            var pri=btn.parentNode.parentNode.parentNode.previousElementSibling;
           // console.log(pri);
            //获得单价：
            var price=pri.innerHTML.slice(0,-1); 
            //console.log(price);                 
            //小计=单价*数量n
            var sub=price*n;
            //console.log(sub);           
            var pri1=btn.parentNode.parentNode.parentNode.nextElementSibling;
            pri1.innerHTML=sub+"元";
            loadCart();                    
    }
}
}
//删除当前行
//查找删除触发事件当元素.del
function del(){
var dels=document.querySelectorAll(".shop-operate .shop-operate-x");
console.log(dels);
//找到当前行
var table=document.getElementById("car");
//console.log(table);
//为每个.del的元素绑定单击事件
for(var del of dels){
  del.onclick=function(){
    var del=this;
    //先找到当前按钮所在的行对象
    var shopColumn=del.parentNode.parentNode.parentNode;
    // 获取当前商品pid
    var pid=del.getAttribute("data-pid");
    //console.log(pid);
    //删除前，先跟用户确认
    var confirm=document.querySelector(".confirm");
    confirm.className="confirm show";
    var bool;
    var deselect=document.getElementById("qx");
    var notarize=document.getElementById("qr");
    deselect.onclick=function(){
        confirm.className="confirm hidden";      
    }
    //单击确认按钮 
    notarize.onclick=function(){
        //移除父节点
        table.removeChild(shopColumn);
        // 发送ajax请求 删除数据            
        $.ajax({
            url:"http://127.0.0.1:8080/shop/del_shop",
            type:"get",
            data:{pid},
            datatype:"json",
            success:function(result){
                if(result.code==1){
                    confirm.className="confirm hidden";
                   load()                    
                }          
            }           
        })  
        loadCart(); 
    }  
  } 
}
}

//全选
    function chbAll(){
    //1.查找触发事件的元素
    //查找table下thead下tr下第一个th中的input
    var chbAll=document.querySelector(".shop-basket-head>div:first-child>input");
    //console.log(chbAll);
    //tbody下所有tr中的第一个td中的input
    var chbs=document.querySelectorAll(".shop-option-list");
    //console.log(chbs);
    //2.绑定事件处理函数
    chbAll.onclick=function(){
        //var chbAll=this;
        //3.查找要修改的元素
        //已在外部找过，可直接使用chbs集合
        //4.修改元素
        //遍历chbs中每个chb元素对象
        for(var chb of chbs){
            //当前chb的checked状态和chbAll的checked状态始终保持一致就行
            chb.checked=chbAll.checked;
            loadCart();
        }
    }
    //1.查找触发事件的元素
    //已在开头找过，可直接使用chbs集合
    //2.绑定事件处理的函数
    //遍历chbs中的每个chb元素对象
    for(var chb of chbs){
        //每遍历一个，都要绑定单击事件处理函数
        chb.onclick=function(){
            var chb=this;
            //3.查找要修改的元素:chbAll
            //4.修改元素
            //如果当前chb是取消选中,则chbAll一定不选
            if(chb.checked==false){
                chbAll.checked=false;
               // console.log(chb);
            }else{//否则
                //如果找不到未选中的chb
                //先查找.shop-option-list中未选中的input
                var unchecked=document.querySelector(".shop-option-list:not(:checked)");
                if(unchecked==null){
                    chbAll.checked=true;
                } 
            }
            loadCart();
        } 
    }
}
//封装一个计算总价的函数
function loadCart(){
    var checkeds=document.querySelectorAll(".shop-basket-list>.shop-check_all>input:checked");
    //console.log(checkeds);
    var totalCount=0;
    var totalPrice=0;
    for(var elem of checkeds){
       var price= parseInt(elem.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML.slice(0,-1));
       console.log(price);
       var count=parseInt(elem.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.children[1].innerHTML);
       console.log(count)
       totalCount+=count;
       totalPrice+=count*price;
    }
    //  document.querySelector(".buy-count").innerHTML=`共 <i>${con}</i> 件商品，已选择 <i>${totalCount}</i> 件`;
    document.getElementsByClassName("settle-accounts-right2")[0].innerHTML=`${totalPrice}`
}

//动态获取商品列表
$.ajax({
    url:"http://127.0.0.1:8080/shop/product_car",
    type:"get",
    data:{uid},
    datatype:"json",
    success:function(result){
        //console.log(result.data[0]);
        var html=""
        for(var i=0;i<10;i++){
            html+=`<div class="clearfix-commodity">
            <a href="#"><img class="clearfix-img" src="${result.data[i].img}" alt="" height="110" width="110"></a>
            <a href="#"><p class="clearfix-title">${result.data[i].title}</p></a>
            <span class="clearfix-price">${result.data[i].price}</span>
            <a class="clearfix-goodrep-a" href="#">
                <div class="clearfix-goodrep-count">${result.data[i].good_reputation}</div>
                <a class="clearfix-goodrep" href="javascript:;" data-cid=${result.data[i].cid}>加入购物车</a>
            </a>
        </div>`
        }
        document.querySelector(".clearfix").innerHTML=html;
        var btns=document.querySelectorAll(".clearfix-goodrep");
        //console.log(btns);
        for(var i=0;i<btns.length;i++){
            btns[i].onclick=function(){
               var cid=this.getAttribute("data-cid");
               $.ajax({
                url:"http://127.0.0.1:8080/shop/shopping",
                type:"get",
                data:{cid},
                datatype:"json",
                success:function(result){
                    //console.log(result)
                    var title=result[0].title;
                    var price=result[0].price;
                    var img=result[0].img;
                    var count=result[0].count;
                    var total=result[0].total;              
                   $.ajax({
                    url:"http://127.0.0.1:8080/shop/add_car",
                    type:"post",
                    data:{title,price,img,count,total,uid,cid},
                    datatype:"json",
                    success:function(result){
                        //console.log(result)
                       // console.log(title,price,img,count,total);
                       load()                    
                    }
                    })
                }
            })
            }
        }
    }
})
