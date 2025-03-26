const path = require('path')

const express = require('express')

const rootDir = require('../util/path')

const router = express.Router()

// this will always run - unless previous middleware returned response
router.get('/', (req, res, next) => {
    // in this middleware we will send a response - so no need to call next
    console.log('Hello from shop middleware');
    // need to use path in order to concatenate paths based on OS
    // then we are adding views folder
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
})

module.exports = router