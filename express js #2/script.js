const express = require('express');
const app = express();

const path = require('path');
const filepath = path.join(__dirname ,'files');


// app.use(express.static(filepath)); static routing

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