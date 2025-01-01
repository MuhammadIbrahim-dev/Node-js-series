const http =require('http');

function sourcecontrol(req , resp){
resp.writeHead(200, {'Content-Type': 'application/json'});
resp.write(JSON.stringify({name: 'ibrahim', email: 'rendom@gmail.com'}));
resp.end();
}
http.createServer(sourcecontrol).listen(5000);