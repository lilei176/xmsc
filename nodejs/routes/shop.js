const express=require("express")
const router=express.Router();
const pool=require("../pool")

//按id查询指定商品
router.get("/shop_car",(req,res)=>{
  var uid=req.query.uid;
 // console.log(uid);
  pool.query("SELECT * FROM xm_shop_car where uid=?",[uid],(err,result)=>{
	if(err) throw err;
	res.send(result);
//	console.log(result);
  })
})

//按照pid删除指定商品
router.get("/del_shop",(req,res)=>{
  var pid=req.query.pid;
  //console.log(pid)
  pool.query("DELETE FROM `xm_shop_car` WHERE pid=?",[pid],(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:"删除成功"})
 //   console.log(result);
  })
})

//查询所有商品列表xm_product_car
router.get("/product_car",(req,res)=>{
  pool.query("SELECT * FROM xm_product_car",(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:result})
  })
})
//按cid查询商品列表xm_product_car
router.get("/shopping",(req,res)=>{
  var cid=req.query.cid;
 // console.log(cid);
  pool.query("SELECT * FROM xm_product_car where cid=?",[cid],(err,result)=>{
	if(err) throw err;
	res.send(result);
	//console.log(result);
  })
})

//插入指定uid用户的商品到购物车表中
router.post("/add_car",(req,res)=>{
  var uid=req.body.uid;
  var title=req.body.title;
  var price=req.body.price;
  var img=req.body.img;
  var count=req.body.count;
  var total=parseInt(req.body.total);
  var pid=req.body.cid;
  //console.log(title,price,img,count,total,pid)
  pool.query("SELECT * FROM xm_shop_car where uid=? and pid=?",[uid,pid],(err,result)=>{
    if(err)throw err;
    //console.log(result);
    if(result.length>0){
      pool.query("UPDATE xm_shop_car SET count=count+?,  total=total+? WHERE uid=? and pid=?",[count,total,uid,pid],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:"加入成功"})
      })
    }else{
      pool.query("INSERT INTO xm_shop_car(`pid`, `uid`, `title`, `price`, `count`, `total`, `img`) VALUES (?,?,?,?,?,?,?)",[pid,uid,title,price,count,total,img],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"加入成功"})
        }
      })
    }
  })
})

module.exports=router;