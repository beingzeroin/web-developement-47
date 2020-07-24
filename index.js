// 1.  import or #include liek statement for express
var express = require('express');

// 2. Create Application
var app = express();

// 3.  Define Functiosn to run when someone accesses our site
app.get('/', function(req, res){
    //res.send('Hello World');
    res.sendFile(__dirname+'/frontend/html/index.html');
})

// 4. Run Application on a port ==> 65xxx (65K ports) Mostly we use beyone 3000
var port= process.env.PORT  || 3000;

// Once site is up, function() will be called automatically
app.listen(port, function(){
    console.log("Site Running on http://localhost:"+port);
});