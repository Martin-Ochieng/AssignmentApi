# AssignmentApi


Using the API:

Getting a list of bikes

http://localhost:3000/stolen-bikes?location=YOUR_LOCATION&distance=10&page=1&per_page=25


location: Your location
Distance: Distance from your location in miles
Page: Page to return
Per Page: Records per page



Get STats about manufacturers of the stolen bikes
http://localhost:3000/bike-stats?location=YOUR_LOCATION&distance=10&page=1&per_page=100
Gets a list of the manufacturers with number of stolen bikes per manufacturer

location: Your location
Distance: Distance from your location in miles
Page: Page to return
Per Page: Records per page
















1.	Are there any potential disadvantages to using async functions?
      a.	Complexity: The level of conplexity in asycnchonous code is significantly higher as understanding the code might be difficult esecially for developers not familiar with the concept. This is because the flow in most cases is not as strasignt forward as is the case with Sycnchronous code.
      b.	Debugging: Debugging asycnhronous code can me more difficult than Synchronous code as the flow is not as straightforward making it difficult to identify problem areas within the flow to identify error easily.
      c.	Error handling: Error handling in asynchronous code can be more complex. This is mostly because errors may not be caught in the same context within which they were thrown.
      d.	Callback Challenges: Before inplementation of async/await, handling of callbacks was a significatly big challenge for asynchronous programmming especily whe the callbacks were nested.

2.	What is SOP and CORS? Why is it important for making API calls in our projects?

Same-Origin Policy (SOP):

SOP is a security feature implemented by web browsers to prevent JavaScript code from making requests to a different origin (domain, protocol, or port) than the one from which the script was served.
It helps protect user data and prevent malicious attacks, such as Cross-Site Request Forgery (CSRF) and Cross-Site Scripting (XSS) attacks.
Under SOP, web pages can only make requests to resources (APIs, images, scripts, etc.) from the same origin, which is defined by the combination of domain, protocol, and port.
Cross-Origin Resource Sharing (CORS):

CORS is a mechanism that relaxes the SOP restrictions, allowing web servers to specify which origins are permitted to access the resources on a server.
When a browser makes a cross-origin request, it sends an HTTP request with an Origin header that specifies the origin of the requesting site.
The server can then respond with appropriate CORS headers (Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers, etc.) to indicate which origins are allowed to access its resources.
If the server's CORS policy allows the origin of the requesting site, the browser allows the request; otherwise, it blocks the request for security reasons.
Why is it important for making API calls?:

When making API calls from a web page to a server with a different origin, SOP would normally block these requests for security reasons.
CORS allows servers to explicitly allow cross-origin requests, enabling web applications to make API calls to servers hosted on different domains.
This is crucial for building modern web applications, as they often need to interact with APIs hosted on different servers or domains. Without CORS, such interactions would be blocked by the browser, and the API calls would fail.


3.	What is your preferred method of making API calls, and why?
      a.	I prefer Rest over soap due to complexity and compatibility. Most new systems are set up as rest emdpoints rather than soap seen as they are much simpler to deal with and understand.
      b.	I prefer Post requests to get requests when calling APIs from another API as I find it eaier to dynamically build the payload as compared to dynamically building the URI.



4.	How does the Fetch API work?

Making a Request:
To make a request using the Fetch API, you use the fetch() function, providing the URL of the resource you want to fetch as an argument. You can also include optional parameters such as request headers, request method, and request body.

Handling the Response:
The fetch() function returns a Promise that resolves to the Response object representing the response to your request. You can then use methods like json(), text(), or blob() on the Response object to extract the response data.

Error Handling:
You can use the .catch() method to handle any errors that occur during the fetch operation.


Sending Data:
You can also send data with a fetch request by including an options object with a method property set to 'POST' or 'PUT', and a body property containing the data you want to send.

fetch('https://api.example.com/data', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({ key: 'value' })
})
.then(response => {
// Handle the response
})
.catch(error => {
// Handle errors
});


5.	What does fetch() return?
      The fetch() function returns a Promise that resolves to the Response object representing the response to your request. The Response object contains useful properties and methods for working with the response data.

6.	How do async functions work?
      Async functions are a special type of function in JavaScript that allow you to write asynchronous code more easily and with less boilerplate compared to traditional callback-based or promise-based code.
      They work bu using the “await” declaration to pause code execution until a promise is fulfilled and a result is given




7.	What does the await keyword do?
      The await keyword pauses the code flow until a specific ite mis resolved



