const Promise = require('bluebird')
const fs = Promise.promisifyAll(require("fs"));


const data = fs.readFileSync('./day-1/data', 'utf8')
dataArray = data.toString().split('\n').map((s) => s.replace('\r', ''))

let value = 0;
let frequencyMap = {
    0: 1
};

function calculateEmegencyFrequency() {
    dataArray.forEach(e => {
        value = eval(`${value} ${e}`)
        frequencyMap[value] = (frequencyMap[value] || 0) + 1
    
        if (frequencyMap[value] === 2) {
            console.log(value)
            exit;
        }
    });
}

calculateEmegencyFrequency()
