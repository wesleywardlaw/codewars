// Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

// 6 kyu

function dashatize(num) {
    let str = String(num)
        .split('')
        .map(element =>
            Number(element) % 2 === 1 ? '-' + element + '-' : element
        )
        .join('');
    str = str.replace(/--/g, '-');
    if (str[0] === '-') {
        str = str.slice(1);
    }
    if (str[str.length - 1] === '-') {
        str = str.slice(0, -1);
    }
    return str;
}
