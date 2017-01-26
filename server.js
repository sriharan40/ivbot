var http = require('http'),
    twilio = require('twilio');

http.createServer(function (req, res) {
    //Create TwiML response
    var twiml = new twilio.TwimlResponse();
    twiml.say("Hello my Amdocs friends and family. This is Himants POC for IVR on cloud. Bot options will be configured ASAP.");

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());

}).listen(process.env.PORT || 5000);


