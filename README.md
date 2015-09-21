# Valpak NodeJS Assessment Exercise

Write an HTTP server listening at http://localhost:5000 that reports the average temperature among 4 major U.S. cities according to [openweathermap.org](http://openweathermap.org/current). 

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

###Considerations
- What async patterns can we make use of to avoid callback hell? 


