/*!
 * jQuery++ - 2.0.1
 * http://jquerypp.com
 * Copyright (c) 2016 Bitovi
 * Tue, 05 Apr 2016 23:46:37 GMT
 * Licensed MIT
 */

/*jquerypp@2.0.1#event/resize/resize*/
define(['../reverse/reverse.js'], function ($) {
    var win = $(window), windowWidth = 0, windowHeight = 0, timer;
    $(function () {
        windowWidth = win.width();
        windowHeight = win.height();
    });
    $.event.reverse('resize', {
        handler: function (ev, data) {
            var isWindow = this === window;
            if (isWindow && ev.originalEvent) {
                var width = win.width(), height = win.height();
                if (width != windowWidth || height != windowHeight) {
                    windowWidth = width;
                    windowHeight = height;
                    clearTimeout(timer);
                    timer = setTimeout(function () {
                        win.trigger('resize');
                    }, 1);
                }
                return true;
            }
        }
    });
    return $;
});