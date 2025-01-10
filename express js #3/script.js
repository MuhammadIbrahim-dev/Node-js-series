//install template engine
//ejs template engine
const express = require('express');
const app = express();

const path = require('path');
const filepath = path.join(__dirname ,'files');

app.set('view engine','ejs');

app.get('/profile',(req ,resp)=>{
    const users ={
        name :'ibrahim',
        email: 'ibrahim@test.com',
        city: 'faisalabad',
    }
    resp.render('profile',{users});
});
app.get('',(req ,resp)=>{
    resp.sendFile(`${filepath}/index.html`);
})
app.get('/about',(req ,resp)=>{
    resp.sendFile(`${filepath}/about.html`);
})
app.get('*',(req ,resp)=>{
    resp.sendFile(`${filepath}/page404.html`);
})



app.listen(4500);