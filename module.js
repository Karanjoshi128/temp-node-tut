// const amount = 12;
// if(amount > 10){
//     console.log("Big number");
// }
// else{
//     console.log("Small number");
// }
// console.log(`It is my first node app using ${amount}`);

const names = require('./name')
const sayHi = require('./Utils')


sayHi('susan')
sayHi(names.john)
sayHi(names.peter)