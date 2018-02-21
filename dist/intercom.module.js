"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hide_directive_1 = require("./directives/hide.directive");
var show_messages_directive_1 = require("./directives/show-messages.directive");
var show_new_message_directive_1 = require("./directives/show-new-message.directive");
var show_directive_1 = require("./directives/show.directive");
var shutdown_directive_1 = require("./directives/shutdown.directive");
var track_event_directive_1 = require("./directives/track-event.directive");
var intercom_1 = require("./intercom/intercom");
var intercom_config_1 = require("./shared/intercom-config");
var IntercomModule = (function () {
    function IntercomModule() {
    }
    IntercomModule.forRoot = function (config) {
        return {
            ngModule: IntercomModule,
            providers: [
                { provide: intercom_config_1.IntercomConfig, useValue: config },
                intercom_1.Intercom
            ]
        };
    };
    IntercomModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        router_1.RouterModule
                    ],
                    declarations: [
                        hide_directive_1.IntercomHideDirective,
                        show_messages_directive_1.IntercomShowMessagesDirective,
                        show_new_message_directive_1.IntercomShowNewMessageDirective,
                        show_directive_1.IntercomShowDirective,
                        shutdown_directive_1.IntercomShutdownDirective,
                        track_event_directive_1.IntercomTrackEventDirective
                    ],
                    exports: [
                        hide_directive_1.IntercomHideDirective,
                        show_messages_directive_1.IntercomShowMessagesDirective,
                        show_new_message_directive_1.IntercomShowNewMessageDirective,
                        show_directive_1.IntercomShowDirective,
                        shutdown_directive_1.IntercomShutdownDirective,
                        track_event_directive_1.IntercomTrackEventDirective
                    ]
                },] },
    ];
    /** @nocollapse */
    IntercomModule.ctorParameters = function () { return []; };
    return IntercomModule;
}());
exports.IntercomModule = IntercomModule;
//# sourceMappingURL=intercom.module.js.map