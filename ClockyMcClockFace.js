// Story
// Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.

// And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.

// Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!

// What a bunch of cheapskates!

// Can you do it?

// Kata
// Given the angle (in degrees) of the hour-hand, return the time in HH:MM format. Round down to the nearest minute.

// Examples
// 12:00 = 0 degrees
// 03:00 = 90 degrees
// 06:00 = 180 degrees
// 09:00 = 270 degrees
// 12:00 = 360 degrees

//6 kyu

var whatTimeIsIt = function(angle) {
    let hour = Math.floor(angle / 30);
    let minutes = Math.floor((angle - 30 * hour) * 2);
    if (angle % 30 === 0) {
        minutes = 0;
    }
    if (angle < 30 || angle === 360) {
        hour = 12;
    }
    if (String(hour).length < 2) {
        hour = '0' + hour;
    }
    if (String(minutes).length < 2 && minutes < 10) {
        minutes = '0' + minutes;
    }
    if (String(minutes).length < 2) {
        minutes = minutes + '0';
    }
    return hour + ':' + minutes;
};
