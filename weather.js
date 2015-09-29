// JavaScript source code
var https = require('https');

/**
 * HOW TO Make an HTTP Call - GET
 */
// options for GET
var optionsget = {
    host: 'api.openweathermap.org', // here only the domain name
    // (no http/https !)
    port: 80,
    path: '/data/2.5/weather?q=Tampa,FL&units=imperial&mode=json', // the rest of the url with parameters if needed
    method: 'GET' // do GET
};

console.info('Options prepared:');
console.info(optionsget);
console.info('Do the GET call');
console.info('Gets the weather for the city chosen.')

// do the GET request
var reqGet = https.request(optionsget, function (res) {
    console.log("statusCode: ", res.statusCode);
    // uncomment it for header details
    console.log("headers: ", res.headers);


    res.on('data', function (d) {
        console.info('GET result:\n');
        process.stdout.write(d);
        console.info('\n\nCall completed');
    });

});

reqGet.end();
reqGet.on('error', function (e) {
    console.error(e);
});

/**
 * HOW TO Make an HTTP Call - POST
 */
// do a POST request
// create the JSON object
jsonObject = JSON.stringify({
    "message": "The web of things is approaching, let do some tests to be ready!",
    "name": "Test message posted with node.js",
    "caption": "Some tests with node.js",
    "link": "http://www.youscada.com",
    "description": "this is a description",
    "picture": "http://youscada.com/wp-content/uploads/2012/05/logo2.png",
    "actions": [{
        "name": "youSCADA",
        "link": "http://www.youscada.com"
    }]
});

// prepare the header
var postheaders = {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(jsonObject, 'utf8')
};

// the post options
var optionspost = {
    host: 'api.openweathermap.org',
    port: 80,
    path: '/data/2.5/weather?q=Tampa,FL&units=imperial&mode=json',
    method: 'POST',
    headers: postheaders
};

console.info('Options prepared:');
console.info(optionspost);
console.info('Do the POST call');

// do the POST call
var reqPost = https.request(optionspost, function (res) {
    console.log("statusCode: ", res.statusCode);
    // uncomment it for header details
    //  console.log("headers: ", res.headers);

    res.on('data', function (d) {
        console.info('POST result:\n');
        process.stdout.write(d);
        console.info('\n\nPOST completed');
    });
});

// write the json data
reqPost.write(jsonObject);
reqPost.end();
reqPost.on('error', function (e) {
    console.error(e);
});

/**
 * Get Message - GET
 */
// options for GET
var optionsgetmsg = {
    host: 'api.openweathermap.org', // here only the domain name -- api.openweathermap.org/data/2.5/weather?q={city name}
    // (no http/https !)
    port: 80,
    path: '/data/2.5/weather?q=Tampa,FL&units=imperial', // the rest of the url with parameters if needed
    method: 'GET' // do GET
};

console.info('Options prepared:');
console.info(optionsgetmsg);
console.info('Do the GET call');

// do the GET request
var reqGet = https.request(optionsgetmsg, function (res) {
    console.log("statusCode: ", res.statusCode);
    // uncomment it for header details
    //  console.log("headers: ", res.headers);


    res.on('data', function (d) {
        console.info('GET result after POST:\n');
        process.stdout.write(d);
        console.info('\n\nCall completed');
    });

});

reqGet.end();
reqGet.on('error', function (e) {
    console.error(e);
});
//{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"base":"cmc stations","main":{"temp":285.96,"pressure":1036,"humidity":67,"temp_min":283.15,"temp_max":288.15},"wind":{"speed":3.6,"deg":80},"clouds":{"all":64},"dt":1443484703,"sys":{"type":1,"id":5091,"message":0.0177,"country":"GB","sunrise":1443506235,"sunset":1443548621},"id":2643743,"name":"London","cod":200}


var weather = '<city>'
myObj = { "coord": { "lon": -0.13, "lat": 51.51 }, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04n" }], "base": "cmc stations", "main": { "temp": 285.96, "pressure": 1036, "humidity": 67, "temp_min": 283.15, "temp_max": 288.15 }, "wind": { "speed": 3.6, "deg": 80 }, "clouds": { "all": 64 }, "dt": 1443484703, "sys": { "type": 1, "id": 5091, "message": 0.0177, "country": "GB", "sunrise": 1443506235, "sunset": 1443548621 }, "id": 2643743, "name": "London", "cod": 200 }
;
console.log('The weather in %s is %j', name, myObj);


