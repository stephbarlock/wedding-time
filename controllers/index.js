"use strict";

module.exports = function (router) {
    router.get("/", function (req, res) {
        res.render("index", {
            title: "They Get Married at the End"
        });
    });
};
