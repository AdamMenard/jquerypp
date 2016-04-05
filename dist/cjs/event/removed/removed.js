/*!
 * jQuery++ - 2.0.1
 * http://jquerypp.com
 * Copyright (c) 2016 Bitovi
 * Tue, 05 Apr 2016 23:46:37 GMT
 * Licensed MIT
 */

/*jquerypp@2.0.1#event/removed/removed*/
var $ = require('jquery');
var oldClean = $.cleanData;
$.cleanData = function (elems) {
    for (var i = 0, elem; (elem = elems[i]) !== undefined; i++) {
        $(elem).triggerHandler('removed');
    }
    oldClean(elems);
};
module.exports = $;