const router = require('express').Router();

// api subs here!
const dataRoutes = require('./data-routes');

router.use('/data', dataRoutes);

module.exports = router;