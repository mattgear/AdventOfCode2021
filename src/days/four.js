'use strict';
exports.__esModule = true;
var parseData_1 = require('../helpers/parseData');
var bingoNumbers = (0, parseData_1.parseToIntArray)('dayFourNumbers');
var inputBoards = (0, parseData_1.parseToArrayOfIntArray)('dayFourBoards');
var completeRowColReducer = function (previousValue, currentValue) {
    return previousValue + currentValue;
};
var winnerReducer = function (previousValue, currentValue) {
    return currentValue === 100 ? previousValue : previousValue + currentValue;
};
var finalScore = function (winningBoard, finalBingoNumber) {
    var sumOfAllUnmarkedNos = winningBoard.reduce(winnerReducer, 0);
    var result = sumOfAllUnmarkedNos * finalBingoNumber;
    return result;
};
// loop over bingo numbers
for (var _i = 0, _a = bingoNumbers.entries(); _i < _a.length; _i++) {
    var _b = _a[_i],
        bingoIndex = _b[0],
        bingoNum = _b[1];
    var result = 0;
    var _loop_1 = function (board) {
        var numExists = board.indexOf(bingoNum);
        if (numExists >= 0) {
            // update number to 100
            board[numExists] = 100;
            // can't win before 4
            if (bingoIndex > 4) {
                // check rows for a winner
                for (var i = 0; i < 5; i++) {
                    var arrayIndex = 5 * i;
                    var rows = board.slice(arrayIndex, arrayIndex + 5);
                    if (rows.reduce(completeRowColReducer, 0) === 500) {
                        result = finalScore(board, bingoNum);
                        break;
                    }
                }
                // check cols for a winner
                for (var i = 0; i < 5; i++) {
                    var indexesToFilter = [];
                    for (var j = 0; j < 5; j++) {
                        indexesToFilter.push(5 * j + i);
                    }
                    var cols = indexesToFilter.map(function (item) {
                        return board[item];
                    });
                    if (cols.reduce(completeRowColReducer, 0) === 500) {
                        result = finalScore(board, bingoNum);
                        break;
                    }
                }
            }
        }
        if (result !== 0) {
            return 'break';
        }
    };
    // loop over boards
    for (
        var _c = 0, inputBoards_1 = inputBoards;
        _c < inputBoards_1.length;
        _c++
    ) {
        var board = inputBoards_1[_c];
        var state_1 = _loop_1(board);
        if (state_1 === 'break') break;
    }
    if (result !== 0) {
        console.log('Four A: '.concat(result));
        break;
    }
}
