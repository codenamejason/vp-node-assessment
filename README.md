# Valpak NodeJS Assessment Exercise

 Write a simple HTTP server listening at http://localhost:5000 that reports
 the current temperature in Tampa, FL according to openweathermap.org.

 Current weather data for Tampa, FL can be retrieved at the following endpoint:
 
     http://api.openweathermap.org/data/2.5/weather?q=Tampa,FL&units=imperial

###Requirements
- Your server should respond with the current temperature in Tampa, FL in the following JSON structure:
```javascript
{
	currentTeperature: 81.1
}
```
- response should be served as `application/json`
- you must use Node's native `http` module (no third-party HTTP libs)

###Bonus
- Showcase your knowledge of ES6/7 features (either with a transpiler or a supporting version of Node).
- Add the ability for the client to pass a query parameter to get back the temperature for a different city.
- Using the test library of your choice, write a test to verify the server's expected behavior.
- Post the project files to GitHub.

