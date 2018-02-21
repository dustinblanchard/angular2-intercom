"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var intercom_1 = require("../intercom/intercom");
var IntercomShowNewMessageDirective = (function () {
    function IntercomShowNewMessageDirective(intercom) {
        this.intercom = intercom;
    }
    IntercomShowNewMessageDirective.prototype.onClick = function () {
        var msg = this.message ? this.message : this.intercomShowNewMessage;
        if (msg) {
            this.intercom.showNewMessage(this.message);
        }
        else {
            this.intercom.showNewMessage();
        }
    };
    IntercomShowNewMessageDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[intercomShowNewMessage]'
                },] },
    ];
    /** @nocollapse */
    IntercomShowNewMessageDirective.ctorParameters = function () { return [
        { type: intercom_1.Intercom, },
    ]; };
    IntercomShowNewMessageDirective.propDecorators = {
        "message": [{ type: core_1.Input },],
        "intercomShowNewMessage": [{ type: core_1.Input },],
        "onClick": [{ type: core_1.HostListener, args: ['click',] },],
    };
    return IntercomShowNewMessageDirective;
}());
exports.IntercomShowNewMessageDirective = IntercomShowNewMessageDirective;
//# sourceMappingURL=show-new-message.directive.js.map