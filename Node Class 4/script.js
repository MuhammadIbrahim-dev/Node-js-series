
//Create Basic API 
const http =require('http');
 function controlserver(req , resp) {
resp.writeHead(200, {'Content-Type': 'application/json'});
resp.write(JSON.stringify({ name:'ibrahim',email: 'rendom'}));
resp.end();

}
http.createServer(controlserver).listen(7000 ,() =>{
    console.log('Server is Listening on port 7000');
    
});