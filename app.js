const http = require('http');

const express = require('express');
// initialize express as requestHandler
const app = express();

const server = http.createServer(app);

// start the server and listen on port 3000 to incoming requests
// ongoing loop
server.listen(3000);