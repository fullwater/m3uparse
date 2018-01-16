var express = require('express');
var router = express.Router();
var https = require('https');
var Service = require('./service.js'),
    serv = new Service();
// middleware that is specific to this router
router.use(function log(req, res, next) {

  console.log("Url request:" + req.url);
    next();
});

router

.get('/fileget', function(req, res) {
    https.get({
        host: "prosmarttv.ru",
        path: "/playlist/allplayer/iptvsamoobnov.m3u"
    }, function(https_res) {
        var data = "";

        // this event fires many times, each time collecting another piece of the response
        https_res.on("data", function (chunk) {
            // append this chunk to our growing `data` var
            data += chunk;
        });

        // this event fires *one* time, after all the `data` events/chunks have been gathered
        https_res.on("end", function () {
            // you can use res.send instead of console.log to output via express
            console.log("Data is here");

            res.send(serv.getParseData(data));

        });
    });
})

.get('/*', function(req, res) {
		res.send("OK");
	})


module.exports = router;