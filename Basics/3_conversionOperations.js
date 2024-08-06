
let score=33
console.log( typeof score)
console.log()
//number
//but if 
let scoree = "33ew"
console.log(typeof scoree)
console.log()
 //here we are using operation conversion in Number:
let valueInNumber = Number(scoree) // here Number is used as datatype
console.log(typeof valueInNumber) // here gives datatype number
console.log(valueInNumber);// NaN  bcz of 33ew ; mixture of both
console.log()
//if 

let scoreee = null
let value = Number(scoreee) // here Number is used as datatype
console.log(typeof value) // datatype is number as given in output
console.log(value) // it gives 0 bcz of null
console.log()

let scoreeee = undefined
let valuee = Number(scoreeee) // here Number is used as datatype
console.log(typeof valuee) // datatype is number as given in output
console.log(valuee) // it gives NaN bcz of undefined

console.log()
let scoreeeee = true
let valueee = Number(scoreeeee) // here Number is used as datatype
console.log(typeof valueee) // datatype is number as given in output
console.log(valueee) // it gives 1 bcz of true 0 bcz of false

console.log()
let scoreeeeee = "umaima"
let valueeee = Number(scoreeeeee) // here Number is used as datatype
console.log(typeof valueeee) // datatype is number as given in output
console.log(valueeee) // it gives NaN bcz of string

//conversion in Boolean:

console.log()
let IsLogged = 1
let booleanLoggedIn = Boolean(IsLogged) // here Boolean is used as datatype
console.log(typeof booleanLoggedIn) // datatype is boolean as given in output
console.log(booleanLoggedIn) // it gives true bcz of 1

console.log()
let IsLoggged = ""
let booleanLoggedInn = Boolean(IsLoggged) // here Boolean is used as datatype
console.log(typeof booleanLoggedInn) // datatype is boolean as given in output
console.log(booleanLoggedInn) // it gives false bcz of ""  nothing in qoutes

console.log()
let IsLogggged = "umaima"
let booleanLoggedInnn = Boolean(IsLogggged) // here Boolean is used as datatype
console.log(typeof booleanLoggedInnn) // datatype is boolean as given in output
console.log(booleanLoggedInnn) // it gives true bcz of "umaima" something in qoutes

//conversion in string:

console.log()
let num = 22
let stringNum = String( num)
console.log(typeof stringNum) // datatype is string as given in output
console.log(stringNum)// it gives 22 

//*******************operation*************************** */

console.log()
let one = -3
console.log(one)
console.log(2+2)
console.log(2/2)
console.log(2*2)
console.log(2**2)
console.log(2%2)

console.log()
let str1 = "umaima"
let str2 = " beautiful"
let res = str1 + str2
console.log(res)
console.log()
console.log("2" + 3)
console.log(2 + "3")
console.log("2" + "3")
console.log(2+3)
console.log(1 + 2 + "3")
console.log("1"+ 2 + 3)
console.log(1+"2"+3)
console.log((2+3) + 3*4 / 4)
console.log((2+3) + (3*4) )
console.log(true)
console.log(+true)
console.log(+"")
console.log()

let a=b=c=3
console.log()

console.log(a++)
console.log(++a)
console.log()

let m=4
++m
console.log(m)
let n=4
n++
console.log(n)

console.log("2"==2)

console.log("2"===2)
