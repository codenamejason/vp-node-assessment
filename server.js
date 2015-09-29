/* global process */
// JavaScript source code
// weathernode project
// author: Jason Romero
var http = require('http');
http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});   
   res.write('<!doctype html>\n<html lang="en">\n ' +
   '\n<meta charset="utf-8">\n<title>WeatherNode Project</title>\n' +
   '<style type="text/css">* {font-family:arial, sana-serif;background-color:blue;}</style>' +
   '\n\n<h1>WeatherNode Server</h1>\n' +
   '<div id="content"><h3>The weather is: </h3></div>'
   );

var optionsget = {
    host: 'api.openweathermap.org', // here only the domain name
    // (no http/https !)
    port: 80,
    path: '/data/2.5/weather?q=Tampa,FL&units=imperial&mode=json', // the rest of the url with parameters if needed
    method: 'GET', // do GET
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
};

console.info('Gets the weather for the city chosen.\n')

// do the GET request
var reqGet = http.request(optionsget, function (res) {
    //console.log("statusCode: ", res.statusCode);
    //uncomment it for header details
    //console.log("headers: ", res.headers);
    res.on('data', function (d) {
        console.info('GET weather:\n');
        console.info('Here is the weather for Tampa: ' + '\n');
        process.stdout.write(d);
    });

});

reqGet.on('error', function (e) {
    console.error(e);
});

reqGet.end();
}).listen(3000, '127.0.0.1');
console.log('\n\n\WeatherNode running at http://127.0.0.1:3000/\n'); 

