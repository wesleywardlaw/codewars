// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word.
// Punctuation marks should be treated as if they are apart of the word in this kata.
//6 kyu

function reverse(str) {
    let reversedString = str
        .split(' ')
        .map((word, index) => {
            if (index % 2 !== 0) {
                let reversed = [];
                for (let i = word.length - 1; i >= 0; i--) {
                    reversed.push(word[i]);
                }
                return reversed.join('');
            }
            return word;
        })
        .join(' ');
    return reversedString.trim();
}
