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
    console.log('this will always run');
    next();

    // if we don't call next, the request will be blocked
    // and the request will not be passed to the next middleware
    //instead we can handle the express.response if not sending next
})
// this will run only for add product
app.use('/add-product', (req, res, next) => {
    // in this middleware we will send a response - so no need to call next
    console.log('Hello from add product middleware');
    // no need to specify the content type header as text/html - it is the default
    res.send('<H1>Hello from add product</H1>');
})
// this will always run - unless previous middleware returned response
app.use('/', (req, res, next) => {
    // in this middleware we will send a response - so no need to call next
    console.log('Hello from root middleware');
    // no need to specify the content type header as text/html - it is the default
    res.send('<H1>Hello from root middleware</H1>');
})
// shortcut for server listening
app.listen(3000);
// const server = http.createServer(app);

// // start the server and listen on port 3000 to incoming requests
// // ongoing loop
// server.listen(3000);