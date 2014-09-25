var messageViewer = require('./messageViewer');
var messageFetcher = require('./messageFetcher');

var newsBar = (function () {

    var viewer = null;
    var fetcher = null;

    var displayMessage = function(message) {
        viewer.viewMessage(message);
    }

    var init = function() {
        viewer = messageViewer.createViewer();
        viewer.startViewing();
        fetcher = messageFetcher.createFetcher();
        fetcher.startFetching(viewer.viewMessage);
    }

    return {
        displayMessage: displayMessage,
        init: init
    };
})();

newsBar.init();
//for(var i = 1; i< 12; i ++){
//    var m = messages.createTweet("Well, Here we go. #fiba final with #srbvsusa or maybe #usavssrb? Doesnt matter, we're gonna see great game");
//    newsBar.displayMessage(m);
//}

