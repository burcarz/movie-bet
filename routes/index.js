// IMPORTS IMPORTS IMPORTS
const router = require('express').Router();
const apiRoutes = require('./api');
const publicRoutes = require('./public-routes');

// set up sub directories
router.use('/api', apiRoutes);
router.use('/', publicRoutes);

// Default a 404 if no endpoint is found;
router.use((req, res) => {
    res.status(404).end();
})

/*

react is better than this!

*/

// always export ur router
module.exports = router;