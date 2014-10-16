'use strict';
/* global OAuth */

var messages = require('./messages');
var Stream = require('user-stream');

var messageFetcher = (function () {

    var createFetcher = function () {

        var fetchFromTwitterAnd = function (displayMessage) {
            var extractMessageContent = function(message) {
                console.log(message);
                var tweet = messages.createTweet(message);
                displayMessage(tweet);
            };

            OAuth.initialize('5RuSK2Ve-p0purYBZuaAcNqyusk');
            OAuth.chromeApp('twitter', {}, function(oAuthToken, oAuthTokenSecret) {
                var twitterStream = new Stream({
                    'consumer_key': 'hxAbNDTGRKYeuas4JkmbS8rRV',
                    'consumer_secret': 'I2ngmBWkPiAC7w3hEgyQRUzkoRpMG1AM6xZIV0LWCJGbZNtbvG',
                    'access_token_key': oAuthToken,
                    'access_token_secret': oAuthTokenSecret
                });

                twitterStream.stream();
                twitterStream.on('data', extractMessageContent);
            });
        };

        var startFetching = function(display) {
            fetchFromTwitterAnd(display);
        };

        return {
            startFetching: startFetching
        };
    };

    return {
        createFetcher: createFetcher
    };
}());

module.exports = messageFetcher;