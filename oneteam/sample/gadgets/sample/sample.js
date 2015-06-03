define(function(require, exports, module) {

    require("css!./sample.css");
    var html = require("text!./sample.html");

    var Ratchet = require("ratchet/web");
    var OneTeam = require("oneteam");
    var Empty = require("ratchet/dynamic/empty");

    return Ratchet.GadgetRegistry.register("sample", Empty.extend({

        TEMPLATE: html,

        configureDefault: function()
        {
            this.base();
        },

        setup: function()
        {
            this.get("/projects/{projectId}/sample", this.index);
        },

        prepareModel: function(el, model, callback)
        {
            var self = this;

            this.base(el, model, function() {

                model.title = "Hello World";

                callback();

            });
        },

        afterSwap: function(el, model, originalContext, callback)
        {
            var self = this;

            this.base(el, model, originalContext, function() {

                // TODO: any post-render setup

                callback();
            });
        }

    }));

});