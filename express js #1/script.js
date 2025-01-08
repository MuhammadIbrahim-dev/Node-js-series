const express =require('express');
const app = express();

app.get('',(req ,resp)=>{
    console.log("canidate name is",req.query.name);
    
    resp.send('ibrahim');
})
app.get('/about',(req ,resp)=>{
    console.log("canidate name is",req.query.name);
    resp.send('about page');
})
app.get('/blog',(req ,resp)=>{
    console.log("canidate name is",req.query.name);
    resp.send('blog page');
})
app.get('/contact',(req ,resp)=>{
    console.log("canidate name is",req.query.name);
    resp.send('contact page');
})
app.get('signup',(req ,resp)=>{
    console.log("canidate name is",req.query.name);
    resp.send('signup page');
})
app.listen(7000);