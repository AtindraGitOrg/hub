//import and object creation 

var express = require('express');
var app = express();



//static file use
app.use(express.static('public'));

//view being set

app.set('view engine', 'ejs');





//route

app.get('/',function(req,res){
    //res.setHeader('Contant-Type','text/html')
    res.render('imp',{ userName :'', adult :'' });
    
});

app.get('/:name/:permission',function(req,res){
    res.render('imp.js',{ userName : req.params.name, adult : req.params.permission })
    });


app.listen(8080);