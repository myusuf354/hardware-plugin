var exec = require('cordova/exec');

var UbequBTPrinter = {
    list: function (fnSuccess, fnError) {
        exec(fnSuccess, fnError, "UbequBTPrinter", "list", []);
    },
    connect: function (fnSuccess, fnError, name) {
        exec(fnSuccess, fnError, "UbequBTPrinter", "connect", [name]);
    },
    disconnect: function (fnSuccess, fnError) {
        exec(fnSuccess, fnError, "UbequBTPrinter", "disconnect", []);
    },
    print: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "UbequBTPrinter", "print", [str]);
    },
    printText: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "UbequBTPrinter", "printText", [str]);
    },
    printImage: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "UbequBTPrinter", "printImage", [str]);
    },
    printPOSCommand: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "UbequBTPrinter", "printPOSCommand", [str]);
    },
    printQRCode: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "UbequBTPrinter", "printQRCode", [str]);
    },
    printBase64: function (fnSuccess, fnError, str, align) {
        exec(fnSuccess, fnError, "UbequBTPrinter", "printBase64", [str, align]);
    },
};

module.exports = BTPrinter;
