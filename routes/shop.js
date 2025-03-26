const express = require('express')

const router = express.Router()

// this will always run - unless previous middleware returned response
router.get('/', (req, res, next) => {
    // in this middleware we will send a response - so no need to call next
    console.log('Hello from root middleware');
    // no need to specify the content type header as text/html - it is the default
    res.send('<H1>Hello from root middleware</H1>');
})

module.exports = router