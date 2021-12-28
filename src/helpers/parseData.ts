import { readFileSync } from 'fs';
import path = require('path');

const filePath = (filename: string) =>
    path.join(__dirname, `../../data/${filename}.txt`);

export const parseToString = (filename: string) => {
    const data = readFileSync(filePath(filename)).toString().split('\n');
    return data;
};

export const parseToInt = (filename: string) => {
    const data = parseToString(filename);
    const dataAsInt = data.map((d) => {
        return parseInt(d);
    });
    return dataAsInt;
};

export const parseToIntArray = (filename: string) => {
    const data = readFileSync(filePath(filename))
        .toString()
        .split(',')
        .map((item) => parseInt(item));
    return data;
};

export const parseToArrayOfIntArray = (filename: string): number[][] => {
    const data = readFileSync(filePath(filename))
        .toString()
        .replace(/^\s+|\s+$/g, '')
        .split(/\s+/);
    const dataToInt = data.map((d) => parseInt(d));
    const final = sliceIntoArrays(dataToInt);
    return final;
};

function sliceIntoArrays(arr: number[]) {
    const res: number[][] = [];
    for (let i = 0; i < arr.length; i += 25) {
        const smallerArr = arr.slice(i, i + 25);
        res.push(smallerArr);
    }
    return res;
}
