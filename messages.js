var messages = (function () {

    var TYPE_TWEET = 1;

    var prepareMessageText = function(messageText) {
        var carriageRemoved = messageText.replace(/[\n\r]/g, ' ');
        return carriageRemoved;
    }

    var message = function(messageType, messageContent) {
        var messageType = messageType;
        var messageContent = prepareMessageText(messageContent);

        var messageNode = document.createElement('span');
        messageNode.setAttribute('class', 'message animated fadeInUp');

        var displayOn = function(messageWrapper) {
            messageNode.innerText = messageContent;
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
        return message(TYPE_TWEET, messageObject.text);
    };

    return {
        createTweet: createTweet
    };
}());

module.exports = messages;