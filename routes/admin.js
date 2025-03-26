const path = require('path')

const express = require('express')

const router = express.Router();

// this will run only for add product
// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    // in this middleware we will send a response - so no need to call next
    console.log('Hello from add product middleware');
    // use admin html
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
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