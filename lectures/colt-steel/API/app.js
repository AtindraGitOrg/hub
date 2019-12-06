var request = require('request');
request('http://cricscore-api.appspot.com/csa', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log(JSON.parse(body)); // Print the HTML for the Google homepage.

  let t1= JSON.parse(body);

  //console.log(t1[0].t1);

  t1.forEach((element) => { if(element.t1 =="India") console.log(element.t2)

    
  });
});