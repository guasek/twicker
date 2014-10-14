var messages = (function () {

    var prepareMessageText = function(messageText) {
        var carriageRemoved = messageText.replace(/[\n\r]/g, ' ');
        return carriageRemoved;
    }

    var message = function(author, messageContent) {
        var author = author;
        var messageContent = prepareMessageText(messageContent);

        var messageNode = document.createElement('span');
        messageNode.setAttribute('class', 'message animated fadeInUp');

        var displayOn = function(messageWrapper) {
            messageNode.innerText = author + ": " + messageContent;
            messageWrapper.appendChild(messageNode);
        }

        var deleteAfterAnd = function (timeout, callback) {
            setTimeout(function() {
                messageNode.addEventListener('webkitAnimationEnd', function() {
                    messageNode.parentNode.removeChild(messageNode);
                    callback();
                })
                messageNode.setAttribute('class', 'message animated fadeOutLeft');
            }, timeout);
        }

        return {
            displayOn: displayOn,
            deleteAfterAnd: deleteAfterAnd
        }
    };

    var createTweet = function(messageObject){
        if (typeof messageObject.text === "undefined") {
            return;
        }
        return message(messageObject.user.name, messageObject.text);
    };

    return {
        createTweet: createTweet
    };
}());

module.exports = messages;