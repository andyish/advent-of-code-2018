const Promise = require('bluebird')
const fs = Promise.promisifyAll(require("fs"));


const data = fs.readFileSync('./day-1/data', 'utf8')
dataArray = data.toString().split('\n').map((s) => s.replace('\r', ''))


const answer = eval(dataArray.join(' '))

console.log(answer)