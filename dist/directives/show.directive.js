"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var intercom_1 = require("../intercom/intercom");
var IntercomShowDirective = (function () {
    function IntercomShowDirective(intercom) {
        this.intercom = intercom;
    }
    IntercomShowDirective.prototype.onClick = function () {
        var msg = this.message ? this.message : this.intercomShow;
        if (msg) {
            this.intercom.showNewMessage(this.message);
        }
        else {
            this.intercom.show();
        }
    };
    IntercomShowDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[intercomShow]'
                },] },
    ];
    /** @nocollapse */
    IntercomShowDirective.ctorParameters = function () { return [
        { type: intercom_1.Intercom, },
    ]; };
    IntercomShowDirective.propDecorators = {
        "message": [{ type: core_1.Input },],
        "intercomShow": [{ type: core_1.Input },],
        "onClick": [{ type: core_1.HostListener, args: ['click',] },],
    };
    return IntercomShowDirective;
}());
exports.IntercomShowDirective = IntercomShowDirective;
//# sourceMappingURL=show.directive.js.map