"use strict";
exports.__esModule = true;
exports.electron = void 0;
var fileReader_1 = require("./fileReader");
exports.electron = window.require('electron');
var dialog = exports.electron.remote.dialog;
var a;
module.exports = {
    open_file: function () {
        dialog.showOpenDialog({ title: "allo" }).then(function (data) { return fileReader_1["default"].handle_file((data.filePaths[0])); });
    },
    test: function () {
        alert(a);
    }
};
