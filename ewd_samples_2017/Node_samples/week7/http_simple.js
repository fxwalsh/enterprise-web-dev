import http from 'http';
import config from './config';
var server = http.createServer((request, response)=>{
     response.writeHead(200, {"Content-Type": "text/plain"});
     response.end("Hello World\n");
});
server.listen(config.port);
console.log(`Server running at ${config.port}`);