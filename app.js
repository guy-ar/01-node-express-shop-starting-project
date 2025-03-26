const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

// initialize express as requestHandler
const app = express();
// // it will add support for req.body to be parsed for content of regular form
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// replace bodyParser with express built-in parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// this will run only for add product
app.use('/add-product', (req, res, next) => {
    // in this middleware we will send a response - so no need to call next
    console.log('Hello from add product middleware');
    // no need to specify the content type header as text/html - it is the default
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
})

app.use('/product', (req, res, next) => {
    // now body will hold the form data - after it is parsed
    console.log(req.body);
    // redirect back to root - no need to set status and header location
    res.redirect('/');
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
