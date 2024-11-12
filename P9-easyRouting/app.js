const http = require('http');
http.createServer(function(request, response){
    if(request.url === '/home' || request.url ==='/'){
        response.setHeader('Content-Type', 'text/html', 'charset=utf-8;');
        
    }
}).listen(3000)