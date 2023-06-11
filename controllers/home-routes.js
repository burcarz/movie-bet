const router = require('express').Router();

// home page, default endpoint
router.get('/', (req, res) => {
    // render index.html
    // gets way more complicated than this!
    console.log('loaded');
    res.render('homepage');
})

module.exports = router;