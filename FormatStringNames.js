// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

//6kyu

function list(names) {
    let str = '';
    names.map(element => {
        if (names.length === 1) {
            str += element.name;
        } else if (names.indexOf(element) === names.length - 1) {
            str += '& ' + element.name;
        } else if (names.indexOf(element) === names.length - 2) {
            str += element.name + ' ';
        } else {
            str += element.name + ', ';
        }
    });
    return str;
}
