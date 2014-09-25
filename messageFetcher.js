var messages = require('./messages');
var Stream = require('user-stream');

var messageFetcher = (function () {

    var createFetcher = function () {

        var twitterStream = new Stream({
            "consumer_key": "hxAbNDTGRKYeuas4JkmbS8rRV",
            "consumer_secret": "I2ngmBWkPiAC7w3hEgyQRUzkoRpMG1AM6xZIV0LWCJGbZNtbvG",
            "access_token_key": "713921370-YFYQdCLL4XQeG4SDPromGaIFnTVY8ZM0jMytVi6B",
            "access_token_secret": "NyodbrLpPHGY1JAkLZhZdcl1bFo6z1J81hRTKZAEGZqAu"
        });


        var fetchFromTwitterAnd = function (displayMessage) {
            var extractMessageContent = function(message) {
                console.log(message);
                var tweet = messages.createTweet(message);
                displayMessage(tweet);
            }
            twitterStream.stream();
            twitterStream.on('data', extractMessageContent);
        }

        var startFetching = function(display) {
            fetchFromTwitterAnd(display);
        }


        return {
            startFetching: startFetching
        };
    }

    return {
        createFetcher: createFetcher
    };
}());

module.exports = messageFetcher;