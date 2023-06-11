const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    // a classic hello world w/o the world
    res.json('hello');
})

module.exports = router;