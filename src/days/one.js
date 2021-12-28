'use strict';
exports.__esModule = true;
var parseData_1 = require('../helpers/parseData');
var depthInput = (0, parseData_1.parseToInt)('dayOne');
var individualDepthIncreases = numOfDepthIncreases(depthInput);
var movingDepthInput = slidingWindow(depthInput);
var slidingDepthIncreases = numOfDepthIncreases(movingDepthInput);
console.log('One A: '.concat(individualDepthIncreases));
console.log('One B: '.concat(slidingDepthIncreases));
function numOfDepthIncreases(depths) {
    var previousDepth = 0;
    var totalIncreases = 0;
    depths.forEach(function (currentDepth) {
        var isDeeper = currentDepth > previousDepth;
        if (isDeeper && previousDepth !== 0) {
            totalIncreases++;
        }
        previousDepth = currentDepth;
    });
    return totalIncreases;
}
function slidingWindow(depths) {
    var last = 0;
    var current = 0;
    var next = 0;
    var total = 0;
    var slidingWindow = depths.map(function (depth) {
        last = current;
        current = next;
        next = depth;
        total = last + current + next;
        return total;
    });
    return slidingWindow.slice(2);
}
