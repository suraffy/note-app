const fs = require('fs');
const chalk = require('chalk');


const getNotes = () => {
    return 'Your notes...';
};




const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find( (note) => note.title === title );

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);
        console.log( chalk.bgGreen.black('New note added!') );        
    } else {
        console.log( chalk.bgRed.white('Title taken!') );
    }
};




const removeNote = (title) => {
    notes = loadNotes();

    // const noteToRemove = notes.filter( (note) => note.title === title );
    // find() return a single object(it catchs only the first which filfilled the requirement in the callback function)
    // filter() returns an array(all elements that filfilled the requirement in the callback function).
    const noteToRemove = notes.find( (note) => note.title === title );

    if (noteToRemove) {
        const noteToRemoveIndex = notes.indexOf(noteToRemove);
        notes.splice(noteToRemoveIndex, 1);
        
        saveNotes(notes);
        console.log( chalk.bgGreen.black('Note Remove!') );
    } else {
        console.log( chalk.bgRed.white('Note not found!') );
    }

};





const listNotes = (title) => {
    const notes = loadNotes();

    console.log (chalk.inverse('Your Notes: ') );

    notes.forEach( (note) => {
        console.log(note.title);
    } );
};





const readNote = (title) => {
    const notes = loadNotes();

    const noteToRead = notes.find( (note) => note.title === title );

    if (noteToRead) {
        console.log( chalk.bgBlue.white(noteToRead['title']) + '\n' + noteToRead['body'] );
    } else {
        console.log( chalk.bgRed.white('Note not found!') );
    }
};







const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
};




module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};