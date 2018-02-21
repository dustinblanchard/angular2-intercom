"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var intercom_1 = require("../intercom/intercom");
var IntercomShowMessagesDirective = (function () {
    function IntercomShowMessagesDirective(intercom) {
        this.intercom = intercom;
    }
    IntercomShowMessagesDirective.prototype.onClick = function () {
        if (this.intercomShowMessages != false) {
            this.intercom.showMessages();
        }
    };
    IntercomShowMessagesDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[intercomShowMessages]'
                },] },
    ];
    /** @nocollapse */
    IntercomShowMessagesDirective.ctorParameters = function () { return [
        { type: intercom_1.Intercom, },
    ]; };
    IntercomShowMessagesDirective.propDecorators = {
        "intercomShowMessages": [{ type: core_1.Input },],
        "onClick": [{ type: core_1.HostListener, args: ['click',] },],
    };
    return IntercomShowMessagesDirective;
}());
exports.IntercomShowMessagesDirective = IntercomShowMessagesDirective;
//# sourceMappingURL=show-messages.directive.js.map