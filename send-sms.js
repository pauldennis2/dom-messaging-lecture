// Twilio Credentials
var accountSid = 'AC8a870f0f115027400449f49c74c5bb2d';
var authToken = '05fcb3213b4c39c02221d30154d0a141';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

client.messages.create({
	// replace with your numbers
    to: "+14049890803",
    from: "+16785417384",
    body: "I feel an integration party brewing!",
}, function(err, message) {
    console.log(message.sid);
});
