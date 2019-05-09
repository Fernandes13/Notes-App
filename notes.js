const fs = require('fs');
const chalk = require('chalk');

const getNotes = function(){
    return "Your notes...";
}

const addNotes = function(title, body){
    const notes = loadNotes();

    const duplucateNotes = notes.filter(function(note){
        return note.title === title;
    })

    if(duplucateNotes.length === 0){

        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added!"));
    }else{
        console.log(chalk.yellow.inverse("Note title taken!"));
    }
  
}

const removeNote = function (title){
    const notes = loadNotes();

    const newArray = notes.filter(function(note){
        return note.title !== title;
    });

    if(notes.length > newArray.length){
        saveNotes(newArray);
        console.log(chalk.green.inverse("Note " + title + " has been removed!"));
    }else{
        console.log(chalk.red.inverse("No note found!"));
    }
}

const saveNotes = function (notes){
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const loadNotes = function(){

    try{
        const notes = fs.readFileSync('notes.json');
        return  JSON.parse(notes);
    }catch(err){
        console.log(chalk.red.inverse("Error loading file"));
        return [];
    }   
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote
}