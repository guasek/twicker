chrome.app.runtime.onLaunched.addListener(function () {

    var barWindow;
    var barWidth = screen.availWidth;
    var barHeight = Math.round(screen.availHeight * 0.05);
    var pixelsFromTop = screen.height - barHeight;

    chrome.app.window.create('bar.html', {
        'id': '1',
        'innerBounds': {
            'minWidth': 0,
            'minHeight': 0,
            'maxWidth': barWidth,
            'maxHeight': barHeight,
            'top': pixelsFromTop,
            'left': 0
        },
        'frame': {
            type: 'none'
        },
        'alwaysOnTop': true,
        'focused': false,
        'singleton': true,
        'resizable': false
    }, function(createdWindow) {
        barWindow = createdWindow;
        barWindow.resizeTo(barWidth, barHeight);
        barWindow.innerBounds.setPosition(0, pixelsFromTop);
    });
});

//    var hideBar = function () {
//        for (var i = 0; i < barHeight; i = i + 3) {
//            setTimeout(function (i) {
//                if (i == barHeight) {
//                    barWindow.hide();
//                    return;
//                }
//                barWindow.innerBounds.setSize(barWidth, barHeight - i);
//                barWindow.innerBounds.setPosition(0, pixelsFromTop + i);
//            }, i * 15 + 200, i);
//        }
//    };
//
//    var createBar =