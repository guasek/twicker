var messages = (function () {

    var TYPE_TWEET = 1;

    var message = function(messageType, messageContent) {
        var messageType = messageType;
        var messageContent = messageContent;

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

    var createTweet = function(messageContent){
        return message(TYPE_TWEET, messageContent);
    };

    return {
        createTweet: createTweet
    };
}());
