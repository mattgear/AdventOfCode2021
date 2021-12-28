import { parseToInt } from '../helpers/parseData';

const depthInput = parseToInt('dayOne');

const individualDepthIncreases = numOfDepthIncreases(depthInput);
const movingDepthInput = slidingWindow(depthInput);
const slidingDepthIncreases = numOfDepthIncreases(movingDepthInput);

console.log(`One A: ${individualDepthIncreases}`);
console.log(`One B: ${slidingDepthIncreases}`);

function numOfDepthIncreases(depths: number[]): number {
    let previousDepth = 0;
    let totalIncreases = 0;

    depths.forEach((currentDepth) => {
        const isDeeper = currentDepth > previousDepth;

        if (isDeeper && previousDepth !== 0) {
            totalIncreases++;
        }

        previousDepth = currentDepth;
    });

    return totalIncreases;
}

function slidingWindow(depths: number[]): number[] {
    let last = 0;
    let current = 0;
    let next = 0;
    let total = 0;

    const slidingWindow = depths.map((depth) => {
        last = current;
        current = next;
        next = depth;

        total = last + current + next;
        return total;
    });

    return slidingWindow.slice(2);
}
