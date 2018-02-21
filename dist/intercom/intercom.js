"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var intercom_config_1 = require("../shared/intercom-config");
var load_intercom_1 = require("../util/load-intercom");
/**
 * A provider with every Intercom.JS method
 * @export
 * @class Intercom
 */
var Intercom = (function () {
    function Intercom(config, router) {
        var _this = this;
        this.config = config;
        this.router = router;
        load_intercom_1.loadIntercom(config);
        if (config.updateOnRouterChange) {
            this.router.events.subscribe(function (event) {
                _this.update();
            });
        }
        else if (core_1.isDevMode()) {
            console.warn('Common practice in single page applications is to update whenever the route changes. ng-intercom supports this functionality out of the box; just set `updateOnRouterChange` to true in your Intercom Module config. This warning will not appear in production, if you choose not to use router updating.');
        }
    }
    /**
     * If you'd like to control when Intercom is loaded, you can use the 'boot' method. This is useful in situations like a one-page Javascript based application where the user may not be logged in when the page loads. You call this method with the standard intercomSettings object.
     * @param {object} [intercomData] Your intercom configuration
     */
    /**
       * If you'd like to control when Intercom is loaded, you can use the 'boot' method. This is useful in situations like a one-page Javascript based application where the user may not be logged in when the page loads. You call this method with the standard intercomSettings object.
       * @param {object} [intercomData] Your intercom configuration
       */
    Intercom.prototype.boot = /**
       * If you'd like to control when Intercom is loaded, you can use the 'boot' method. This is useful in situations like a one-page Javascript based application where the user may not be logged in when the page loads. You call this method with the standard intercomSettings object.
       * @param {object} [intercomData] Your intercom configuration
       */
    function (intercomData) {
        var data = __assign({}, intercomData, { app_id: this.config.appId });
        return window.Intercom('boot', data);
    };
    /**
     * If you have the Respond product (combined with another product like Engage) you should call the Intercom shutdown method to clear your users’ conversations anytime they logout of your application. Otherwise, the cookie we use to track who was most recently logged in on a given device or computer will keep these conversations in the Messenger for one week. This method will effectively clear out any user data that you have been passing through the JS API.
     */
    /**
       * If you have the Respond product (combined with another product like Engage) you should call the Intercom shutdown method to clear your users’ conversations anytime they logout of your application. Otherwise, the cookie we use to track who was most recently logged in on a given device or computer will keep these conversations in the Messenger for one week. This method will effectively clear out any user data that you have been passing through the JS API.
       */
    Intercom.prototype.shutdown = /**
       * If you have the Respond product (combined with another product like Engage) you should call the Intercom shutdown method to clear your users’ conversations anytime they logout of your application. Otherwise, the cookie we use to track who was most recently logged in on a given device or computer will keep these conversations in the Messenger for one week. This method will effectively clear out any user data that you have been passing through the JS API.
       */
    function () {
        return window.Intercom("shutdown");
    };
    /**
     * Calling the update method without any other arguments will trigger the JavaScript to look for new messages that should be displayed to the current user (the one whose details are in the window.intercomSettings variable) and show them if they exist.
     *
     * Calling the update method with a JSON object of user details will update those fields on the current user in addition to logging an impression at the current URL and looking for new messages for the user.
     * @param {object} [data]
     */
    /**
       * Calling the update method without any other arguments will trigger the JavaScript to look for new messages that should be displayed to the current user (the one whose details are in the window.intercomSettings variable) and show them if they exist.
       *
       * Calling the update method with a JSON object of user details will update those fields on the current user in addition to logging an impression at the current URL and looking for new messages for the user.
       * @param {object} [data]
       */
    Intercom.prototype.update = /**
       * Calling the update method without any other arguments will trigger the JavaScript to look for new messages that should be displayed to the current user (the one whose details are in the window.intercomSettings variable) and show them if they exist.
       *
       * Calling the update method with a JSON object of user details will update those fields on the current user in addition to logging an impression at the current URL and looking for new messages for the user.
       * @param {object} [data]
       */
    function (data) {
        if (data) {
            return window.Intercom("update", data);
        }
        else {
            return window.Intercom("update");
        }
    };
    /**
     * This will hide the main Messenger panel if it is open. It will not hide the Messenger Launcher.
     */
    /**
       * This will hide the main Messenger panel if it is open. It will not hide the Messenger Launcher.
       */
    Intercom.prototype.hide = /**
       * This will hide the main Messenger panel if it is open. It will not hide the Messenger Launcher.
       */
    function () {
        return window.Intercom('hide');
    };
    /**
     * This will show the Messenger. If there are no conversations it will open with the new message view, if there are it will open with the message list.
     *
     * If a `message` parameter is supplied, it will automatically open a new message window, aliasing showNewMessage().
     *
     * @param {string} [message]
     */
    /**
       * This will show the Messenger. If there are no conversations it will open with the new message view, if there are it will open with the message list.
       *
       * If a `message` parameter is supplied, it will automatically open a new message window, aliasing showNewMessage().
       *
       * @param {string} [message]
       */
    Intercom.prototype.show = /**
       * This will show the Messenger. If there are no conversations it will open with the new message view, if there are it will open with the message list.
       *
       * If a `message` parameter is supplied, it will automatically open a new message window, aliasing showNewMessage().
       *
       * @param {string} [message]
       */
    function (message) {
        if (message) {
            return window.Intercom('show');
        }
        else {
            return this.showNewMessage(message);
        }
    };
    /**
     * To open the message window with the message list you can call `showMessages()`.
     */
    /**
       * To open the message window with the message list you can call `showMessages()`.
       */
    Intercom.prototype.showMessages = /**
       * To open the message window with the message list you can call `showMessages()`.
       */
    function () {
        return window.Intercom('showMessages');
    };
    /**
     * To open the message window with the new message view you can call showNewMessage().
     *
     * This function takes an optional parameter that can be used to pre-populate the message composer as shown below.
     * @param {string} message
     */
    /**
       * To open the message window with the new message view you can call showNewMessage().
       *
       * This function takes an optional parameter that can be used to pre-populate the message composer as shown below.
       * @param {string} message
       */
    Intercom.prototype.showNewMessage = /**
       * To open the message window with the new message view you can call showNewMessage().
       *
       * This function takes an optional parameter that can be used to pre-populate the message composer as shown below.
       * @param {string} message
       */
    function (message) {
        if (message) {
            return window.Intercom('showNewMessage', message);
        }
        else {
            return window.Intercom('showNewMessage');
        }
    };
    /**
     * You can submit an event using the trackEvent method. This will associate the event with the currently logged in user and send it to Intercom. The final parameter is a map that can be used to send optional metadata about the event.
     *
     * You can also add custom information to events in the form of event metadata.
     * @param {string} eventName
     * @param {*} [metadata]
     */
    /**
       * You can submit an event using the trackEvent method. This will associate the event with the currently logged in user and send it to Intercom. The final parameter is a map that can be used to send optional metadata about the event.
       *
       * You can also add custom information to events in the form of event metadata.
       * @param {string} eventName
       * @param {*} [metadata]
       */
    Intercom.prototype.trackEvent = /**
       * You can submit an event using the trackEvent method. This will associate the event with the currently logged in user and send it to Intercom. The final parameter is a map that can be used to send optional metadata about the event.
       *
       * You can also add custom information to events in the form of event metadata.
       * @param {string} eventName
       * @param {*} [metadata]
       */
    function (eventName, metadata) {
        if (metadata) {
            return window.Intercom('trackEvent', eventName, metadata);
        }
        else {
            return window.Intercom('trackEvent', eventName);
        }
    };
    /**
     * A visitor is someone who goes to your site but does not use the messenger. You can track these visitors via the visitor user_id. This user_id can be used to retrieve the visitor or lead through the REST API.
     * @returns {string}
     */
    /**
       * A visitor is someone who goes to your site but does not use the messenger. You can track these visitors via the visitor user_id. This user_id can be used to retrieve the visitor or lead through the REST API.
       * @returns {string}
       */
    Intercom.prototype.getVisitorId = /**
       * A visitor is someone who goes to your site but does not use the messenger. You can track these visitors via the visitor user_id. This user_id can be used to retrieve the visitor or lead through the REST API.
       * @returns {string}
       */
    function () {
        return window.Intercom('getVisitorId');
    };
    Object.defineProperty(Intercom.prototype, "visitorId", {
        /**
         * Alias for getVisitorId()
         * @alias getVisitorId()
         * @readonly
         * @type {string}
         */
        get: /**
           * Alias for getVisitorId()
           * @alias getVisitorId()
           * @readonly
           * @type {string}
           */
        function () {
            return window.Intercom('getVisitorId');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gives you the ability to hook into the show event. Requires a function argument.
     * @param {() => void} handler
     */
    /**
       * Gives you the ability to hook into the show event. Requires a function argument.
       * @param {() => void} handler
       */
    Intercom.prototype.onShow = /**
       * Gives you the ability to hook into the show event. Requires a function argument.
       * @param {() => void} handler
       */
    function (handler) {
        return window.Intercom('onShow', handler);
    };
    /**
     * Gives you the ability to hook into the hide event. Requires a function argument.
     *
     * @param {() => void} handler
     */
    /**
       * Gives you the ability to hook into the hide event. Requires a function argument.
       *
       * @param {() => void} handler
       */
    Intercom.prototype.onHide = /**
       * Gives you the ability to hook into the hide event. Requires a function argument.
       *
       * @param {() => void} handler
       */
    function (handler) {
        return window.Intercom('onHide', handler);
    };
    /**
     * This method allows you to register a function that will be called when the current number of unread messages changes.
     * @param {(unreadCount?: number) => void} handler
     */
    /**
       * This method allows you to register a function that will be called when the current number of unread messages changes.
       * @param {(unreadCount?: number) => void} handler
       */
    Intercom.prototype.onUnreadCountChange = /**
       * This method allows you to register a function that will be called when the current number of unread messages changes.
       * @param {(unreadCount?: number) => void} handler
       */
    function (handler) {
        return window.Intercom('onUnreadCountChange', handler);
    };
    Intercom.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    Intercom.ctorParameters = function () { return [
        { type: intercom_config_1.IntercomConfig, decorators: [{ type: core_1.Inject, args: [intercom_config_1.IntercomConfig,] },] },
        { type: router_1.Router, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [router_1.Router,] },] },
    ]; };
    return Intercom;
}());
exports.Intercom = Intercom;
//# sourceMappingURL=intercom.js.map