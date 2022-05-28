const router = require('express').Router();

// Import api routes to pass to ./controllers/home-routes
const userRoutes = require('./userRoutes');
const medicationRoutes = require('./medication-routes');

// Load end points onto /api
router.use('/users', userRoutes);
router.use('/medications', medicationRoutes);

module.exports = router;