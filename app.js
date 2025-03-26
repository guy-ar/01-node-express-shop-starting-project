const http = require('http');

const express = require('express');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

// initialize express as requestHandler
const app = express();
// it will add support for req.body to be parsed for content of regular form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(adminRoute);
app.use(shopRoute);

// shortcut for server listening
app.listen(3000);
