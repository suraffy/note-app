const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');


// Customize yargs version
yargs.version('1.1.0');

// add, remove, read, list


// Creating add command
yargs.command({
    command: 'add',
    description: 'Adding a new note!',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Creating remove commadnd
yargs.command({
    command: 'remove',
    description: 'Removing a note!',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

// Creating list command
yargs.command({
    command: 'list',
    description: 'Listing your notes!',
    handler() {
        notes.listNotes();
    }
});

// Creating read command
yargs.command({
    command: 'read',
    description: 'Reading a note!',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});



yargs.parse();
// console.log(yargs.argv);















// const msg = getNotes();
// console.log(msg);

// console.log( validator.isURL('sura.com') );
// console.log( validator.isEmail('sura@gmail.com') );

// console.log( chalk.green.bold.inverse('Success!') );



// const add = require('./utils.js');
// const sum = add(6, -1);
// console.log(sum);