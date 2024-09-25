const express = require('express');
const app = express();
const routers = require('./routers/routers');

app.use(express.json());
app.use('/',routers);

//default error handler
function errorHandle(err,req,res,next){
    if(res.headersSent){
        return next(err);
    }
    res.status(500).json({message:"Default error hander error handled.",
        error: err,
    })
}
app.use(errorHandle);

//making connection
app.listen(3000,()=>{
    console.log("listening on port 3000");
})