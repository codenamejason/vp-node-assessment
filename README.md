# Valpak NodeJS Assessment Exercise

Write an HTTP server listening at http://localhost:5000 that reports the average temperature among 4 major U.S. cities according to [openweathermap.org](http://openweathermap.org/current). Log each incoming request and response to a text file. 

Current weather data can be retrieved at the following endpoint:
 
     http://api.openweathermap.org/data/2.5/weather?q=[CITY,STATE]&units=imperial

###Requirements
- Your server should respond with the current average temperature of the following four cities:
	- New York, NY
	- Miami, FL
	- Chicago, IL
	- Seattle, WA
- The response shape should be a single object containing the average temperature:
```javascript
{
	averageTeperature: 74.3
}
```
- response should be served as `application/json`
- you must use Node's native `http` module (no third-party HTTP libs)
- write each response to a text file with an associated request timestamp like the following:
```
[Mon Sep 20 2015 06:43:55 GMT-0400 (EDT)] averageTemperature: 70.9
[Mon Sep 21 2015 10:19:48 GMT-0400 (EDT)] averageTemperature: 74.3
[Mon Sep 21 2015 11:05:22 GMT-0400 (EDT)] averageTemperature: 74.7
[Mon Sep 21 2015 12:01:32 GMT-0400 (EDT)] averageTemperature: 74.8
```

###Considerations
- What async patterns can we make use of to avoid callback hell? 
- How should we handle errors?
- How can we ensure that our log file operations are efficient?


