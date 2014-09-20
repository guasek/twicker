var messageViewer = (function () {

    var createViewer = function () {
        var messageWrapper = document.querySelector('#message-wrapper');
        var messageQueue = [];

        var addToQueue = function(message) {
            messageQueue.push(message);
        };

        var viewNext = function() {
            var message = messageQueue.pop();
            if (typeof message === "undefined") {
                setTimeout(viewNext, 1000);
                return;
            }
            message.displayOn(messageWrapper);
            message.deleteAfterAnd(2000, viewNext);
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
