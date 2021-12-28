import { parseToArrayOfIntArray, parseToIntArray } from '../helpers/parseData';

const bingoNumbers: number[] = parseToIntArray('dayFourNumbers');
const inputBoards: number[][] = parseToArrayOfIntArray('dayFourBoards');

const completeRowColReducer = (previousValue: number, currentValue: number) =>
    previousValue + currentValue;
const winnerReducer = (previousValue: number, currentValue: number) =>
    currentValue === 100 ? previousValue : previousValue + currentValue;
const finalScore = (winningBoard: number[], finalBingoNumber: number) => {
    const sumOfAllUnmarkedNos = winningBoard.reduce(winnerReducer, 0);
    const result = sumOfAllUnmarkedNos * finalBingoNumber;
    return result;
};

// loop over bingo numbers
for (const [bingoIndex, bingoNum] of bingoNumbers.entries()) {
    let result = 0;
    // loop over boards
    for (const board of inputBoards) {
        const numExists = board.indexOf(bingoNum);

        if (numExists >= 0) {
            // update number to 100
            board[numExists] = 100;

            // can't win before 4
            if (bingoIndex > 4) {
                // check rows for a winner
                for (let i = 0; i < 5; i++) {
                    const arrayIndex = 5 * i;
                    const rows = board.slice(arrayIndex, arrayIndex + 5);
                    if (rows.reduce(completeRowColReducer, 0) === 500) {
                        result = finalScore(board, bingoNum);
                        break;
                    }
                }
                // check cols for a winner
                for (let i = 0; i < 5; i++) {
                    const indexesToFilter: number[] = [];
                    for (let j = 0; j < 5; j++) {
                        indexesToFilter.push(5 * j + i);
                    }
                    const cols = indexesToFilter.map((item) => board[item]);
                    if (cols.reduce(completeRowColReducer, 0) === 500) {
                        result = finalScore(board, bingoNum);
                        break;
                    }
                }
            }
        }
        if (result !== 0) {
            break;
        }
    }
    if (result !== 0) {
        console.log(`Four A: ${result}`);
        break;
    }
}
