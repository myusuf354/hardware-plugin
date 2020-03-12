var exec = require('cordova/exec');

var UkaemBTPrinter = {
    list: function (fnSuccess, fnError) {
        exec(fnSuccess, fnError, "UkaemBluetoothPrinter", "list", []);
    },
    connect: function (fnSuccess, fnError, name) {
        exec(fnSuccess, fnError, "UkaemBluetoothPrinter", "connect", [name]);
    },
    disconnect: function (fnSuccess, fnError) {
        exec(fnSuccess, fnError, "UkaemBluetoothPrinter", "disconnect", []);
    },
    print: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "UkaemBluetoothPrinter", "print", [str]);
    },
    printText: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "UkaemBluetoothPrinter", "printText", [str]);
    },
    printImage: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "UkaemBluetoothPrinter", "printImage", [str]);
    },
    printPOSCommand: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "UkaemBluetoothPrinter", "printPOSCommand", [str]);
    },
    printQRCode: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "UkaemBluetoothPrinter", "printQRCode", [str]);
    },
    printBase64: function (fnSuccess, fnError, str, align) {
        exec(fnSuccess, fnError, "UkaemBluetoothPrinter", "printBase64", [str, align]);
    },
};

module.exports = UkaemBTPrinter;
