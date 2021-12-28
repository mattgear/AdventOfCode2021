import { parseToString } from '../helpers/parseData';

const puzzleInput = parseToString('dayTwo');
const resultOne = taskOne(puzzleInput);
console.log(`Two A: ${resultOne}`);

const resultTwo = taskTwo(puzzleInput);
console.log(`Two B: ${resultTwo}`);

function taskOne(commands: string[]) {
    let horizontalPosition = 0;
    let depth = 0;

    commands.forEach((command) => {
        const result = command.split(' ');
        const direction = result[0];
        const amount = parseInt(result[1]);

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

function taskTwo(commands: string[]) {
    let horizontalPosition = 0;
    let depth = 0;
    let aim = 0;

    commands.forEach((command) => {
        const result = command.split(' ');
        const direction = result[0];
        const amount = parseInt(result[1]);

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
