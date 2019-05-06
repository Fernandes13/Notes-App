const chalk = require('chalk');
const notes = require('./notes.js');

const warning = chalk.keyword('orange');

console.log(notes.getNotes());

console.log(chalk.bgBlue.black('Success!'));
console.log(warning('Ai mãe!'));