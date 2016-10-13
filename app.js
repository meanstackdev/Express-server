/**
 * Created by Office on 10/8/2016.
 */
var express=require('express');
var app=express();
var middleware=require('./middleware');
// Access public folder html pages via __dirname object
app.use(middleware.logger);
// Create about page server request
app.get('/about', middleware.requireAuthentucation,function (req,res) {
    res.send('Welcome to about page !');
});
app.use(express.static(__dirname + '/public'));
// Server listen port
app.listen(3000,function () {
    console.log('Server running on Port : 3000');
});