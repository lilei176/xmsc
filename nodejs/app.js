//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');



/*引入路由模块*/
const shop=require("./routes/shop");

const user=require("./routes/login");

const index=require("./routes/index");

const product=require("./routes/product");
const cors=require("cors");

var server = express();
 server.listen(8080);

const session=require("express-session");

server.use(cors({
    origin:"http://127.0.0.1:5500"
}))


 //(2)配置模块
server.use(session({
  secret:"128位字符串",                  //自定义字符串 128位
  resave:true,                          //每次请求是否更新数据
  saveUninitialized:true                // 保存初始化数据
 }))



//使用body-parser中间件
server.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
server.use(express.static('public'));

/*使用路由器来管理路由*/
server.use("/user",user);

server.use("/shop",shop);

server.use("/index",index);

server.use("/product",product);