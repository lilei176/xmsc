const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/product_pid",(req,res)=>{
  var pid=req.query.pid;
  var sql="select * from xm_product where pid=?";
  pool.query(sql,[pid],(err,result)=>{
    if(err) console.log(err);
     res.send(result);
    
  })
})



module.exports=router;