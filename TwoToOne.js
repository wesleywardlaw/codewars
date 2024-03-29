// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//7kyu

function longest(s1, s2) {
    let combinedArray = (s1 + s2).split('').sort();
    let singleLetters = [];
    combinedArray.map(element => {
        if (singleLetters.indexOf(element) === -1) {
            singleLetters.push(element);
        }
    });
    return singleLetters.join('');
}
