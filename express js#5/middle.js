module.exports=multiFile=(req,resp,next)=>{
    if(!req.query.age) {
        resp.send("<h1>Please Enter Your age<h1/>")
    }else{
        next();
    }
}
