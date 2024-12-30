// create http stand for  (heyperText tranfer protocol) create new server
const http =require('http');
function sourceControl(req , resp) {
    resp.write("hello world");
    resp.end();
}
http.createServer(sourceControl).listen(804);