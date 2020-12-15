
/* jshint -W104  */
/* jshint -W119 */

//===============================================IMPORT=====================================================
//import and intialisation of express OBJECT. 
const express = require ("express");
const app = express();

//import of request
var request = require("request");



//==============================================USE==&==SET=================================================
// app use static
app.use(express.static("public"));

// view set
app.set("view engine", 'EJS');



//==========================ROUTES======================ROUTE===================================================
//route 1- home

app.get("/",getCallback);

// callback for get home

function getCallback(req,res){

 res.render("indexForm.ejs");
    
      }

    



//route 2- FORM

app.get("/tomb",getTeamCallback);

// callback for get home

function getTeamCallback(req,res){

    console.log(req.query.team1);

    request('http://cricscore-api.appspot.com/csa', function (error, response, body) {
        // console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.


//=================================================================================================
 //===================================logic=====================================================
 //================================================================================================
 
 

        let resObjs = JSON.parse(body);
        let resObj = resObjs[0];
        console.log(resObj);
        console.log(Array.isArray(resObjs));
        let key = "id";
        console.log(resObj[key]);

        console.log(key in resObj);
        
        
        

        resObjs.forEach(element => {

                
            if(element.t1 === req.query.team1)
                res.render('index', {team1:req.query.team1 ,team2 : element.t2});
            
            
        });

      });

    
}




//==============================================================================================
//============================================================================================================
//==============================================================================================
//============================================================================================================
//==============================================================================================




// Route-3 TTT

    app.get('/ttt',ticTacToe);

    function ticTacToe(req,res){

        res.render("tic_tac_toe.ejs");

    }





//port opening

app.listen("8080");

