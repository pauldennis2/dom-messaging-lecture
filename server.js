const http = require('http');
const express = require('express');
const twilio = require('twilio');
const bodydParser = require('body-parser');
const MessagingResponse = twilio.twiml.MessagingResponse;

const app = express();
app.use(bodydParser());

var messageList = [];

app.post('/sms', function(req, res) {
  console.log("user says: " + req.body.Body);
  messageList.push(req.body.Body);

  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

app.get('/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('My server is running yo!');

});

app.get('/send-message', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log("Message received");
    var userMessage = req.query.message;
    console.log("message: " + userMessage);
    messageList.push(userMessage);
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    res.send('{"status": "SUCCESS"}');
});

app.get('/get-message-history', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log("Returning message history");
    res.send(messageList);
});

http.createServer(app).listen(1337, function () {
  console.log("Express server listening on port 1337");
});
