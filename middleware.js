/**
 * Created by Office on 10/13/2016.
 */
var middleware={
    requireAuthentucation:function (req,res,next) {
        console.log('Private Route Hit!');
        next();
    },
    logger:function (req,res,next) {
        console.log('Request:' + new Date().toDateString()+ '' +req.method+ '' + req.originalUrl);
        next();
    }
};
module.exports=middleware;
