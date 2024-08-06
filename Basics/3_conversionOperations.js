
let score=33
console.log( typeof score)
//number
//but if 
let scoree = "33ew"
console.log(typeof scoree)

 //here we are using operation conversion in Number:
let valueInNumber = Number(scoree) // here Number is used as datatype
console.log(typeof valueInNumber) // here gives datatype number
console.log(valueInNumber);// NaN  bcz of 33ew ; mixture of both

//if 

let scoreee = null
let value = Number(scoreee) // here Number is used as datatype
console.log(typeof value) // datatype is number as given in output
console.log(value) // it gives 0 bcz of null

let scoreeee = undefined
let valuee = Number(scoreeee) // here Number is used as datatype
console.log(typeof valuee) // datatype is number as given in output
console.log(valuee) // it gives NaN bcz of undefined

let scoreeeee = true
let valueee = Number(scoreeeee) // here Number is used as datatype
console.log(typeof valueee) // datatype is number as given in output
console.log(valueee) // it gives 1 bcz of true 0 bcz of false

let scoreeeeee = "umaima"
let valueeee = Number(scoreeeeee) // here Number is used as datatype
console.log(typeof valueeee) // datatype is number as given in output
console.log(valueeee) // it gives NaN bcz of string

//conversion in Boolean:

let IsLogged = 1
let booleanLoggedIn = Boolean(IsLogged) // here Boolean is used as datatype
console.log(typeof booleanLoggedIn) // datatype is boolean as given in output
console.log(booleanLoggedIn) // it gives true bcz of 1

let IsLoggged = ""
let booleanLoggedInn = Boolean(IsLoggged) // here Boolean is used as datatype
console.log(typeof booleanLoggedInn) // datatype is boolean as given in output
console.log(booleanLoggedInn) // it gives false bcz of ""  nothing in qoutes

let IsLogggged = "umaima"
let booleanLoggedInnn = Boolean(IsLogggged) // here Boolean is used as datatype
console.log(typeof booleanLoggedInnn) // datatype is boolean as given in output
console.log(booleanLoggedInnn) // it gives true bcz of "umaima" something in qoutes

//conversion in string:

let num = 22
let stringNum = String( num)
console.log(typeof stringNum) // datatype is string as given in output
console.log(stringNum)// it gives 22 