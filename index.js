const { execFile } = require('child_process');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function child(day) {
  execFile('node', [`./days/${day}/solution.js`], (error, stdout, stderr) => {
    if (error) {
      throw error;
    }

    console.log(stdout);
  });
}

readline.question(`Which day's solution would you like?`, (day) => {
  child(day);
  readline.close();
});
