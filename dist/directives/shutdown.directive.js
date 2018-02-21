"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var intercom_1 = require("../intercom/intercom");
var IntercomShutdownDirective = (function () {
    function IntercomShutdownDirective(intercom) {
        this.intercom = intercom;
    }
    IntercomShutdownDirective.prototype.onClick = function () {
        if (this.intercomShutdown != false) {
            this.intercom.shutdown();
        }
    };
    IntercomShutdownDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[intercomShutdown]'
                },] },
    ];
    /** @nocollapse */
    IntercomShutdownDirective.ctorParameters = function () { return [
        { type: intercom_1.Intercom, },
    ]; };
    IntercomShutdownDirective.propDecorators = {
        "intercomShutdown": [{ type: core_1.Input },],
        "onClick": [{ type: core_1.HostListener, args: ['click',] },],
    };
    return IntercomShutdownDirective;
}());
exports.IntercomShutdownDirective = IntercomShutdownDirective;
//# sourceMappingURL=shutdown.directive.js.map