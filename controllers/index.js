const api = require ("./api");
const homeRoutes = require ("./homeRoutes");
const express = require ("express");
const router = express.Router ();

router.use (function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
});

router.get('/', function (req, res) {
    res.send("Homepage")
});

module.exports = router