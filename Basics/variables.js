
const accID = 123
let accState
let accEmail = "1qw@gmail.com"
var accPass = "w2w"
 accCity = "lahore"
console.log(accCity)
//accEmail="2"
//prefer not to use var literal

//u can see accCity was not declared so when i print it in console.log() it gave me error.

//but when i use console.table([]), it print the accCity .

//also i declare "accState" by using  let and then tried to print it an it run and just show as undefined 
//not like accCity(didnt run) means accCity could also be printed if declared with "let". 

console.table([accCity,accID,accPass,accEmail,accState])