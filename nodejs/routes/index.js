const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/index_img",(req,res)=>{
  var sql="select * from xm_img";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
   res.send(result);
    
  })
})

router.get("/index_mi",(req,res)=>{
  var sql="select * from xm_x9";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
   res.send(result);
    
  })
})

router.get("/xm_product",(req,res)=>{
  var pid=req.query.pid
  var sql="select * from xm_product_index where pid=? ";
  pool.query(sql,[pid],(err,result)=>{
    if(err) console.log(err);
    res.send(result);
    
  })
})

module.exports=router;
