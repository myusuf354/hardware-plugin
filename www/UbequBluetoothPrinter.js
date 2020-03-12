var exec = require('cordova/exec');

var UbequBTPrinter = {
    list: function (fnSuccess, fnError) {
        exec(fnSuccess, fnError, "UbequBluetoothPrinter", "list", []);
    },
    connect: function (fnSuccess, fnError, name) {
        exec(fnSuccess, fnError, "UbequBluetoothPrinter", "connect", [name]);
    },
    disconnect: function (fnSuccess, fnError) {
        exec(fnSuccess, fnError, "UbequBluetoothPrinter", "disconnect", []);
    },
    print: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "UbequBluetoothPrinter", "print", [str]);
    },
    printText: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "UbequBluetoothPrinter", "printText", [str]);
    },
    printImage: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "UbequBluetoothPrinter", "printImage", [str]);
    },
    printPOSCommand: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "UbequBluetoothPrinter", "printPOSCommand", [str]);
    },
    printQRCode: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "UbequBluetoothPrinter", "printQRCode", [str]);
    },
    printBase64: function (fnSuccess, fnError, str, align) {
        exec(fnSuccess, fnError, "UbequBluetoothPrinter", "printBase64", [str, align]);
    },
};

module.exports = UbequBTPrinter;
