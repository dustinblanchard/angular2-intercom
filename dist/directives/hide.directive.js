"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var intercom_1 = require("../intercom/intercom");
var IntercomHideDirective = (function () {
    function IntercomHideDirective(intercom) {
        this.intercom = intercom;
    }
    IntercomHideDirective.prototype.onClick = function () {
        if (this.intercomHide != false) {
            this.intercom.hide();
        }
    };
    IntercomHideDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[intercomHide]'
                },] },
    ];
    /** @nocollapse */
    IntercomHideDirective.ctorParameters = function () { return [
        { type: intercom_1.Intercom, },
    ]; };
    IntercomHideDirective.propDecorators = {
        "intercomHide": [{ type: core_1.Input },],
        "onClick": [{ type: core_1.HostListener, args: ['click',] },],
    };
    return IntercomHideDirective;
}());
exports.IntercomHideDirective = IntercomHideDirective;
//# sourceMappingURL=hide.directive.js.map