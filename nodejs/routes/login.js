const express=require("express");
const router=express.Router();
const pool=require("../pool");




//登录查询用户名密码是否正确
router.post("/login",(req,res)=>{
	//console.log(1111);
  var uname=req.body.uname;
  var upwd=req.body.upwd;  
  //console.log(uname,upwd)
  var sql="select * from xm_user where uname=? and upwd=? ";
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err) throw(err);
	//console.log(result);
	if(result.length>0){
		res.send({code:1,data:result});
		req.session.uid=result[0].uid
		console.log(req.session.uid);
	}else{
		res.send({code:-1,data:"用户不存在"})
	}
  })
})
//查询手机号码 验证码是否正确
router.post("/login_phone",(req,res)=>{
	//console.log(1111);
  var phone=req.body.phone;
  var note=req.body.note;  
  console.log(phone,note)
  var sql="select * from xm_user where phone=? and note=? ";
  pool.query(sql,[phone,note],(err,result)=>{
    if(err) throw(err);
	console.log(result);
	if(result.length>0){
		res.send({code:1,data:result});
    /*res.writeHead(200,{
      "Access-Control-Allow-Origin":"http://127.0.0.1:5500",
      "Content-Type":"application/json;charset=utf-8"
    });
    res.write(JSON.stringify(result));
    res.end();*/
	//console.log(result);
	}else{
		res.send({code:-1,data:"用户不存在"})
	}
  })
})

//注册用户,查询用户名是否被占用  
router.post("/register",(req,res)=>{
	
  var uname=req.body.uname;
  var upwd=req.body.upwd;  
  console.log(uname,upwd)
  var sql="select * from xm_user where uname=? and upwd=? ";
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err) throw(err);
	if(result.length>0){
		res.send({code:-1,msg:"该用户名已被占用，请重新输入"});
	}else{
		console.log(uname,upwd)
		var sql1="INSERT INTO xm_user VALUES(null,?,?,null,null,null,null)";
		//"INSERT INTO xm_user SET ?"
		pool.query(sql1,[uname,upwd],(err,result)=>{
			console.log(err)
				
			console.log(result)
			if(result.affectedRows>0){
				res.send({code:1,msg:"注册成功,即将跳转至登录页"})
			}
		})		
	}
  })
})
module.exports=router;