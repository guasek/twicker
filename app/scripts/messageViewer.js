var messageViewer = (function () {

    const messageDisplayTime = 10000;
    const messageMeanTime = 1000;

    var createViewer = function () {
        var messageWrapper = document.querySelector('#message-wrapper');
        var messageQueue = [];

        var addToQueue = function(message) {
            messageQueue.push(message);
        };

        var viewNext = function() {
            var message = messageQueue.pop();
            if (typeof message === "undefined") {
                setTimeout(viewNext, messageMeanTime);
                return;
            }
            message.displayOn(messageWrapper);
            message.deleteAfterAnd(messageDisplayTime, viewNext);
        }

        var startViewing = function() {
            setTimeout(viewNext, 1000);
        }

        return {
            viewMessage: addToQueue,
            startViewing: startViewing
        };
    }

    return {
        createViewer: createViewer
    };
}());

module.exports = messageViewer;