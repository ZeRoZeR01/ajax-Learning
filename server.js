//1.引入express
const express=require("express");


//const { request } = require("http");

//2.创建应用对象
const app=express();

//3.创建路由规则
app.get('/server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*")

    //设置响应体
    response.send("HELLO AJAX");
});

app.all('/server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*")

    response.setHeader("Access-Control-Allow-Headers","*")

    //设置响应体
    response.send("HELLO AJAX POST");
});

app.all('/json-server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*")

    response.setHeader("Access-Control-Allow-Headers","*")

    const data={
        name:"atguigu"
        };

    //对对象进行字符串转换
    let str=JSON.stringify(data);

    //设置响应体
    response.send(str);
});

app.get('/ie',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*")

    response.setHeader("Access-Control-Allow-Headers","*")

    //设置响应体
    response.send("HELLO IE 2");
});

app.all('/delay',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*")
    response.setHeader("Access-Control-Allow-Headers","*")

    setTimeout(function(){
        //设置响应体
    response.send("延时响应");
    },1000)
});

//jQuery 服务
app.all('/jquery-server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*")
    response.setHeader("Access-Control-Allow-Headers","*")
    // response.send("Hello jQuery AJAX");
    const data={"name":"尚硅谷"};
    response.send(JSON.stringify(data));
});

app.all('/axios-server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*")
    response.setHeader("Access-Control-Allow-Headers","*")
    // response.send("Hello jQuery AJAX");
    const data={"name":"尚硅谷"};
    response.send(JSON.stringify(data));
});

//4.监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已经启动，8080端口监听中");
})
