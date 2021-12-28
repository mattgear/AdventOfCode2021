'use strict';
exports.__esModule = true;
exports.parseToArrayOfIntArray =
    exports.parseToIntArray =
    exports.parseToInt =
    exports.parseToString =
        void 0;
var fs_1 = require('fs');
var path = require('path');
var filePath = function (filename) {
    return path.join(__dirname, '../../data/'.concat(filename, '.txt'));
};
var parseToString = function (filename) {
    var data = (0, fs_1.readFileSync)(filePath(filename))
        .toString()
        .split('\n');
    return data;
};
exports.parseToString = parseToString;
var parseToInt = function (filename) {
    var data = (0, exports.parseToString)(filename);
    var dataAsInt = data.map(function (d) {
        return parseInt(d);
    });
    return dataAsInt;
};
exports.parseToInt = parseToInt;
var parseToIntArray = function (filename) {
    var data = (0, fs_1.readFileSync)(filePath(filename))
        .toString()
        .split(',')
        .map(function (item) {
            return parseInt(item);
        });
    return data;
};
exports.parseToIntArray = parseToIntArray;
var parseToArrayOfIntArray = function (filename) {
    var data = (0, fs_1.readFileSync)(filePath(filename))
        .toString()
        .replace(/^\s+|\s+$/g, '')
        .split(/\s+/);
    var dataToInt = data.map(function (d) {
        return parseInt(d);
    });
    var final = sliceIntoArrays(dataToInt);
    return final;
};
exports.parseToArrayOfIntArray = parseToArrayOfIntArray;
function sliceIntoArrays(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i += 25) {
        var smallerArr = arr.slice(i, i + 25);
        res.push(smallerArr);
    }
    return res;
}
