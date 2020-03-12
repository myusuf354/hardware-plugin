var exec = require('cordova/exec');

var UkaemBTPrinter = {
    list: function (fnSuccess, fnError) {
        exec(fnSuccess, fnError, "UkaemBTPrinter", "list", []);
    },
    connect: function (fnSuccess, fnError, name) {
        exec(fnSuccess, fnError, "UkaemBTPrinter", "connect", [name]);
    },
    disconnect: function (fnSuccess, fnError) {
        exec(fnSuccess, fnError, "UkaemBTPrinter", "disconnect", []);
    },
    print: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "UkaemBTPrinter", "print", [str]);
    },
    printText: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "UkaemBTPrinter", "printText", [str]);
    },
    printImage: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "UkaemBTPrinter", "printImage", [str]);
    },
    printPOSCommand: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "UkaemBTPrinter", "printPOSCommand", [str]);
    },
    printQRCode: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "UkaemBTPrinter", "printQRCode", [str]);
    },
    printBase64: function (fnSuccess, fnError, str, align) {
        exec(fnSuccess, fnError, "UkaemBTPrinter", "printBase64", [str, align]);
    },
};

module.exports = BTPrinter;
