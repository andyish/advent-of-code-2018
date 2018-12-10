const Promise = require('bluebird')
const fs = Promise.promisifyAll(require("fs"));


const data = fs.readFileSync('./day-2/data', 'utf8')
dataArray = data.toString().split('\n').map((s) => s.replace('\r', ''))

let two = 0;
let three = 0;

dataArray.forEach((boxId) => {
    const letterMap = {}
    boxId.split('').forEach((l) => {
        if (!letterMap[l]) {
            letterMap[l] = 0;
        }
        letterMap[l]++;
    });

    let hasTwo = false;
    let hasThree = false;
    Object.keys(letterMap).forEach((l) => {
        if (letterMap[l] === 2) {
            hasTwo = true;
        } else if (letterMap[l] === 3) {
            hasThree = true;
        }
    })

    if (hasTwo) {
        two++;
    }

    if (hasThree) {
        three++;
    }
})

console.log(two, '*', three, '=', two * three)