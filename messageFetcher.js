var messages = require('./messages');
var Stream = require('user-stream');

var messageFetcher = (function () {

    var createFetcher = function () {

        var twitterStream = new Stream({
            "consumer_key": "hxAbNDTGRKYeuas4JkmbS8rRV",
            "consumer_secret": "I2ngmBWkPiAC7w3hEgyQRUzkoRpMG1AM6xZIV0LWCJGbZNtbvG",
            "access_token_key": "713921370-4rwudTcq3Ed3l3X7o1jGt0Ao5fszv7WamkILrBfx",
            "access_token_secret": "AnLm5nZAp6W0lJFfF3iFcHwtAU6eM9DUitqCqEti1LH59"
        });


        var fetchFromTwitterAnd = function (displayMessage) {
            var extractMessageContent = function(message) {
                console.log(message);
                var tweet = messages.createTweet(message);
                displayMessage(tweet);
            }
            twitterStream.stream();
            twitterStream.on('data', extractMessageContent);

            OAuth.initialize('5RuSK2Ve-p0purYBZuaAcNqyusk');
            OAuth.chrome_app('twitter', {}, function(oAuthToken, oAuthTokenSecret) {

            });
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