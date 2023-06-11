// IMPORTS IMPORTS IMPORTS
const router = require('express').Router();



const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

console.log('hello');

// set up sub directories
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

// Default a 404 if no endpoint is found;
router.use((req, res) => {
    console.log('default');
    res.status(404).end();
})

// always export ur router
module.exports = router;