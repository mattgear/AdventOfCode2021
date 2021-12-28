'use strict';
exports.__esModule = true;
var parseData_1 = require('../helpers/parseData');
var binaryNumbers = (0, parseData_1.parseToString)('dayThree');
var power = powerConsumption(binaryNumbers);
console.log('Three A: '.concat(power));
function powerConsumption(inputs) {
    var gammaRate = '';
    var epsilonRate = '';
    // assume lengths are all the same
    var inputLength = inputs[0].length;
    var _loop_1 = function (i) {
        var counter = 0;
        inputs.forEach(function (binary) {
            counter =
                binary.charAt(i) === '1' ? (counter += 1) : (counter -= 1);
        });
        var postiveCounter = counter > 0;
        switch (postiveCounter) {
            case true:
                gammaRate = gammaRate.concat('1');
                epsilonRate = epsilonRate.concat('0');
                break;
            case false:
                gammaRate = gammaRate.concat('0');
                epsilonRate = epsilonRate.concat('1');
                break;
        }
    };
    for (var i = 0; i < inputLength; i++) {
        _loop_1(i);
    }
    // multiplying binary strings
    var power = (parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)).toString(2);
    // converting to decimal
    return parseInt(power, 2);
}
var oxygenRating = findRating('O2' /* oxygenGenerator */);
var c02Rating = findRating('C02' /* c02Generator */);
// multiplying binary strings
var powerTest = (parseInt(oxygenRating, 2) * parseInt(c02Rating, 2)).toString(
    2
);
// converting to decimal
var lifeSupportRating = parseInt(powerTest, 2);
console.log('Three B: '.concat(lifeSupportRating));
function findRating(rating) {
    // Set filtered array
    var filtered = binaryNumbers;
    // define valueToFilter
    var valueToFilter;
    // length of string in input
    var inputStrLength = filtered[0].length;
    var _loop_2 = function (i) {
        // Get bit for i
        var bit = filtered.map(function (number) {
            return number.charAt(i);
        });
        // Sum of bits
        var total = bit.reduce(function (previousValue, currentValue) {
            var valueToAdd = parseInt(currentValue) === 1 ? 1 : -1;
            return previousValue + valueToAdd;
        }, 0);
        if (rating === 'O2' /* oxygenGenerator */) {
            // Set valueToFilter
            valueToFilter = total >= 0 ? '1' : '0';
        } else {
            valueToFilter = total < 0 ? '1' : '0';
        }
        // Filter out any binaryNumbers that don't have a matching bit value
        filtered = filtered.filter(function (binaryNumber) {
            return binaryNumber[i] === valueToFilter;
        });
        if (filtered.length === 1) {
            return 'break';
        }
    };
    // loop 12 times
    for (var i = 0; i < inputStrLength; i++) {
        var state_1 = _loop_2(i);
        if (state_1 === 'break') break;
    }
    return filtered[0];
}
