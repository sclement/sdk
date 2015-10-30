$(document).ready(function() {

    $("#form").alpaca({
        "connector": {
            "id": "cloudcms",
            "config": {
                "clientKey": "",
                "clientSecret": "",
                "username": "",
                "password": "",
                "application": ""//,
                //"baseURL": "https://api.cloudcms.com"
            }
        },
        "schema": "custom:registration",
        "options": "master",
        "data": "cdc16ae0748cf1520f31"
    });

});
