var http=require("http");
var server=http.createServer(function(req,res){
    req.on("data",function(){

    })
    req.on("end",function(){
        console.log(req.url); //请求的地址
        res.write("1001");
        res.end();
    })
})
server.listen(4001,"localhost",function(){
    console.log("服务开启了");
})