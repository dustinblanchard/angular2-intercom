"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var id;
var d = document;
function l() {
    var s = d.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = "https://widget.intercom.io/widget/" + id;
    var x = d.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
}
function loadIntercom(config) {
    id = config.appId;
    var w = window;
    var ic = w.Intercom;
    if (typeof ic === 'function') {
        ic('reattach_activator');
        ic('update', config);
    }
    else {
        var i_1 = function () {
            i_1.c(arguments);
        };
        i_1.q = [];
        i_1.c = function (args) {
            i_1.q.push(args);
        };
        w.Intercom = i_1;
        if (w.attachEvent) {
            w.attachEvent('onload', l);
        }
        else {
            w.addEventListener('load', l, false);
        }
    }
}
exports.loadIntercom = loadIntercom;
;
//# sourceMappingURL=load-intercom.js.map