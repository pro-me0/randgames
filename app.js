const http = require('http'),
port = process.env.PORT || 1212,
fs = require('fs');

http.createServer((req,res) => {
	let url = req.url;
    if ((url.indexOf('main.html') !== -1) | url == '/'){
        res.writeHead(200, {"Content-Type" : "text/html"});
        fs.readFile('./main.html', (err, data) => {
            res.write(data);
            res.end();
        });
    }else if(url.indexOf('.js') !== -1){
        res.writeHead(200, {"Content-Type" : "text/javascript"});
        customReadFile(`.${url}`, res, req);

    }else if(url.indexOf('.css') !== -1){
        res.writeHead(200, {"Content-Type" : "text/css"});
        customReadFile(`.${url}`, res, req);
	}else if(url.indexOf('.mp3') !== -1){
        res.writeHead(200, {"Content-Type" : "music/mp3"});
        customReadFile(`./aud${url}`, res, req);
	}/* else{
		res.end('by')
    } */
	console.log(url)
}).listen(port);
console.log("server hot @ localhost:" + port)

const customReadFile = (file_path, res, req) => {
    if(fs.existsSync(file_path)){
        fs.readFile(file_path, (error, data) => {
            if(error){
                console.log(error);
                sendErrorResponse(res);
                return;
            }
            res.write(data);
            res.end();
        });
    }
};