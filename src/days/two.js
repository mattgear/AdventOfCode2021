'use strict';
exports.__esModule = true;
var parseData_1 = require('../helpers/parseData');
var puzzleInput = (0, parseData_1.parseToString)('dayTwo');
var resultOne = taskOne(puzzleInput);
console.log('Two A: '.concat(resultOne));
var resultTwo = taskTwo(puzzleInput);
console.log('Two B: '.concat(resultTwo));
function taskOne(commands) {
    var horizontalPosition = 0;
    var depth = 0;
    commands.forEach(function (command) {
        var result = command.split(' ');
        var direction = result[0];
        var amount = parseInt(result[1]);
        switch (direction) {
            case 'forward':
                horizontalPosition += amount;
                break;
            case 'down':
                depth += amount;
                break;
            case 'up':
                depth -= amount;
                break;
            default:
                break;
        }
    });
    return horizontalPosition * depth;
}
function taskTwo(commands) {
    var horizontalPosition = 0;
    var depth = 0;
    var aim = 0;
    commands.forEach(function (command) {
        var result = command.split(' ');
        var direction = result[0];
        var amount = parseInt(result[1]);
        switch (direction) {
            case 'forward':
                horizontalPosition += amount;
                depth = depth + aim * amount;
                break;
            case 'down':
                aim += amount;
                break;
            case 'up':
                aim -= amount;
                break;
            default:
                break;
        }
    });
    return horizontalPosition * depth;
}
