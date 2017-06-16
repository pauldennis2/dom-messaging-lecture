console.log("Webchat client is running ...");

function testFetch() {
	console.log("Testing ...");

    fetch('http://localhost:1337/get-message-history').then(function(response) {
        console.log ("Response = ");
        console.log(response);
        return response.json();
    }).then(function(jsonResponse) {
        console.log("jsonResponse = ");
        console.log(jsonResponse);
        renderList(jsonResponse);
    });
}

var messageList = [];

function sendMessage () {
    var userMessage = document.getElementById('user-message').value;
    messageList.unshift(userMessage);
    console.log("About to send " + userMessage);
    console.log("messageList = " );
    console.log(messageList);

    renderList(messageList);
}

function renderList (listToRender) {
    var messageHistoryList = document.getElementById('message-history');
    var messageHistoryHTML = "";
    listToRender.forEach(
        function(message) {
            messageHistoryHTML += "<li class=`list-group-item`>" + message + "</li>";
    });
    console.log("message history HTML = ");
    console.log(messageHistoryHTML);

    messageHistoryList.innerHTML = messageHistoryHTML;
}

setInterval(testFetch, 3000);
