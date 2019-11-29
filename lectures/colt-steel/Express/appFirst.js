var express = require("express");

let app = express();

//route : -

//response

app.get('/path/:suburl', function(req, res){
    console.log(req.params.suburl);
    res.send("hello yahoo--")
});

app.get('*',function(req, res){
    console.log(req.params);
    res.send("hello *")
});

//port opening

app.listen(808,()=>console.log("server started on 3000"));



 
  

