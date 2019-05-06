const validator = require('validator');
const notes = require('./notes.js');

console.log(notes.getNotes());

console.log(validator.isURL("https/mead.io"));