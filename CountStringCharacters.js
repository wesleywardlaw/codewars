// The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

// 6 kyu

function count(string) {
    counter = {};
    string
        .split('')
        .map(element =>
            counter[element] === undefined
                ? (counter[element] = 1)
                : (counter[element] += 1)
        );
    return counter;
}
