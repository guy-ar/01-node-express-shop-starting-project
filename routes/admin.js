const path = require('path')

const express = require('express')
const rootDir = require('../util/path')

const router = express.Router();

// this will run only for add product
// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
})
// we will use same route for both get and post
// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    // now body will hold the form data - after it is parsed
    console.log(req.body);
    // redirect back to root - no need to set status and header location
    res.redirect('/');
})
module.exports = router;