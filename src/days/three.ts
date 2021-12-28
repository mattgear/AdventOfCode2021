import { parseToString } from '../helpers/parseData';

const binaryNumbers = parseToString('dayThree');

const power = powerConsumption(binaryNumbers);
console.log(`Three A: ${power}`);

function powerConsumption(inputs: string[]) {
    let gammaRate = '';
    let epsilonRate = '';
    // assume lengths are all the same
    const inputLength = inputs[0].length;

    for (let i = 0; i < inputLength; i++) {
        let counter = 0;
        inputs.forEach((binary) => {
            counter =
                binary.charAt(i) === '1' ? (counter += 1) : (counter -= 1);
        });
        const postiveCounter = counter > 0;

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
    }

    // multiplying binary strings
    const power = (parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)).toString(
        2
    );
    // converting to decimal
    return parseInt(power, 2);
}

const enum ratings {
    oxygenGenerator = 'O2',
    c02Generator = 'C02',
}

const oxygenRating = findRating(ratings.oxygenGenerator);
const c02Rating = findRating(ratings.c02Generator);
// multiplying binary strings
const powerTest = (parseInt(oxygenRating, 2) * parseInt(c02Rating, 2)).toString(
    2
);
// converting to decimal
const lifeSupportRating = parseInt(powerTest, 2);
console.log(`Three B: ${lifeSupportRating}`);

function findRating(rating: ratings) {
    // Set filtered array
    let filtered = binaryNumbers;
    // define valueToFilter
    let valueToFilter: '1' | '0';
    // length of string in input
    const inputStrLength = filtered[0].length;
    // loop 12 times
    for (let i = 0; i < inputStrLength; i++) {
        // Get bit for i
        const bit = filtered.map((number) => number.charAt(i));
        // Sum of bits
        const total = bit.reduce((previousValue, currentValue) => {
            const valueToAdd = parseInt(currentValue) === 1 ? 1 : -1;
            return previousValue + valueToAdd;
        }, 0);
        if (rating === ratings.oxygenGenerator) {
            // Set valueToFilter
            valueToFilter = total >= 0 ? '1' : '0';
        } else {
            valueToFilter = total < 0 ? '1' : '0';
        }
        // Filter out any binaryNumbers that don't have a matching bit value
        filtered = filtered.filter(
            (binaryNumber) => binaryNumber[i] === valueToFilter
        );

        if (filtered.length === 1) {
            // found the record we want
            break;
        }
    }
    return filtered[0];
}
