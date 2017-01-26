var http = require('http'),
    twilio = require('twilio');

http.createServer(function (req, res) {
    //Create TwiML response
    var twiml = new twilio.TwimlResponse();
    twiml.say("Hello from your Himants POC ! Have fun. Bot options will be configured ASAP.");

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());

}).listen(1337, '127.0.0.1');

console.log('TwiML servin\' server running at http://127.0.0.1:1337/');
