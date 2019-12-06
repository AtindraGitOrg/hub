//import and intialisation of express OBJECT. 

const express = require ("express");
const app = express();

//import of request

var request = require("request");

// app use static

app.use(express.static("public"));

// view set

app.set("view engine", 'EJS');



// //route home

app.get("/",getCallback);

// callback for get home

function getCallback(req,res){

 res.render("indexForm.ejs")
            
     

      };

    



//route form

app.get("/team1",getTeamCallback);

// callback for get home

function getTeamCallback(req,res){

    console.log(req.query.team1);

    request('http://cricscore-api.appspot.com/csa', function (error, response, body) {
        // console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.

        
        let resObj = JSON.parse(body);

        resObj.forEach(element => {

            if(element.t1 == req.query.team1)
                res.render('index', {team1:req.query.team1 ,team2 : element.t2});
            
            
        });

      });

    
}

//port opening

app.listen("8080");

