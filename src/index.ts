import { execFile } from 'child_process';

const days = ['one', 'two', 'three', 'four'];
days.forEach((day) => child(day));

function child(day: string) {
    execFile(
        'node',
        [`./build/days/${day}.js`],
        (error: Error, stdout: string) => {
            if (error) {
                throw error;
            }

            console.log(stdout);
        }
    );
}
