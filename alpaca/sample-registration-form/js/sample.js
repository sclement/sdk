$(document).ready(function() {

    $("#form").alpaca({
        "connector": {
            "id": "cloudcms",
            "config": {
                "clientKey": "",
                "clientSecret": "",
                "username": "",
                "password": "",
                "application": "",
                "baseURL": "http://apidev.cloudcms.com"
            }
        },
        "view": "bootstrap-create",
        "schemaSource": "registrations",
        "optionsSource": "master",
        "postRender": function(control) {

            var imageUrl = Alpaca.branch.getProxiedUri() + "/nodes/root/attachments/default?path=/Images/register-now.png";
            $(".header").append("<img src='" + imageUrl + "'/>");

            control.on("formSubmitSuccess", function() {
                window.location.href = "thankyou.html";
            });

            control.on("formSubmitFail", function() {
                // TODO: handle any server-side invalidation or connectivity issues...
            });

        }
    });

});
