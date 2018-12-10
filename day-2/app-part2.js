const Promise = require('bluebird')
const fs = Promise.promisifyAll(require("fs"));


const data = fs.readFileSync('./day-2/data', 'utf8')
dataArray = data.toString().split('\n').map(s => s.replace('\r', ''))

let diffMap = {}


dataArray.forEach(boxId => {
    const boxIdList = dataArray.filter(word => word !== boxId);


    boxIdList.forEach(sampleId => {
        let numOfDiff = 0;
        for(let i = 0; i < boxId.length; i++) {
            if (boxId[i] !== sampleId[i]) {
                numOfDiff++;
            }
        }
        if (numOfDiff === 1) {
            console.log('FOUND', boxId, '->', sampleId)
            console.log(getCommonLetters(boxId, sampleId))
        }
    })
})

function getCommonLetters(left, right) {
    let commonLetters = ''
    right.split('').forEach(i => {
        const result = left.split('').filter(letter => letter === i)
        if (result.length > 0) {
            commonLetters = commonLetters + result[0]
        }
    })
    return commonLetters;
}


