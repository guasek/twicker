'use strict';

var messageViewer = require('./messageViewer');
var messageFetcher = require('./messageFetcher');

var newsBar = (function () {

    var viewer = null;
    var fetcher = null;

    var displayMessage = function(message) {
        viewer.viewMessage(message);
    };

    var init = function() {
        viewer = messageViewer.createViewer();
        viewer.startViewing();
        fetcher = messageFetcher.createFetcher();
        fetcher.startFetching(viewer.viewMessage);
    };

    return {
        displayMessage: displayMessage,
        init: init
    };
})();

newsBar.init();


