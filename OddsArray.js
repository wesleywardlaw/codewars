// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

// 6kyu

function sortArray(array) {
    oddsArray = [];
    array.map(element => (element % 2 !== 0 ? oddsArray.push(element) : ''));
    oddsArray.sort(compare);
    newArray = array.map(element => {
        if (element % 2 !== 0) {
            return oddsArray.shift();
        }
        return element;
    });
    return newArray;
}

function compare(a, b) {
    return a - b;
}
