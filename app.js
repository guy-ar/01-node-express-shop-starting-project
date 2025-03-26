const http = require('http');

const express = require('express');
// initialize express as requestHandler
const app = express();

// possible to add different middlewares
// for now we will define one generic that
// will be executed for every request
app.use((req, res, next) => {
    // in this middleware we will do something and call next
    // to pass the request to the next middleware
    console.log('Hello from middleware');
    next();

    // if we don't call next, the request will be blocked
    // and the request will not be passed to the next middleware
    //instead we can handle the express.response if not sending next
})

app.use((req, res, next) => {
    // in this middleware we will send a response - so no need to call next
    console.log('Hello from 2nd middleware');
    // no need to specify the content type header as text/html - it is the default
    res.send('<H1>Hello from 2nd middleware</H1>');
})
const server = http.createServer(app);

// start the server and listen on port 3000 to incoming requests
// ongoing loop
server.listen(3000);