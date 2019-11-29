var express = require('express');

var app=express();

//route 

app.get('/',function(req,res){
    res.send('hi this my assignment');
});

var aSpeak;
app.get('/speak/:animal',(req,res)=>{
    switch (req.params.animal) {
        case 'pig':aSpeak='oink';

        break;

        case 'cow':aSpeak='moow';
            
            break;

        case 'dog':aSpeak='woof';
            
            break;
    
        //  default:
        //     break;
    }

    if(aSpeak!==undefined)
    res.send(aSpeak);
});


app.get('*',(req,res)=>{
    res.send('whats up man type correctly');
});


app.listen(8080);