"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var intercom_1 = require("../intercom/intercom");
var IntercomTrackEventDirective = (function () {
    function IntercomTrackEventDirective(intercom) {
        this.intercom = intercom;
    }
    IntercomTrackEventDirective.prototype.onClick = function () {
        var e = this.event ? this.event : this.intercomTrackEvent;
        if (e && this.metadata) {
            this.intercom.trackEvent(e, this.metadata);
        }
        else if (e && !this.metadata) {
            this.intercom.trackEvent(e);
        }
        else {
            throw new Error('Error in intercomTrackEvent directive: You must specify an event to track.');
        }
    };
    IntercomTrackEventDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[intercomTrackEvent]'
                },] },
    ];
    /** @nocollapse */
    IntercomTrackEventDirective.ctorParameters = function () { return [
        { type: intercom_1.Intercom, },
    ]; };
    IntercomTrackEventDirective.propDecorators = {
        "event": [{ type: core_1.Input },],
        "intercomTrackEvent": [{ type: core_1.Input },],
        "metadata": [{ type: core_1.Input },],
        "onClick": [{ type: core_1.HostListener, args: ['click',] },],
    };
    return IntercomTrackEventDirective;
}());
exports.IntercomTrackEventDirective = IntercomTrackEventDirective;
//# sourceMappingURL=track-event.directive.js.map