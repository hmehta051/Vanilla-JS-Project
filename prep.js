/*MUTABLE AND IMMUTABLE
STRING AND NUMBERS ARE IMMUTABLE

var str="hemendra"
str[0]="D"
console.log(str)

let num=20;
num+=1
console.log(num)
let arr=[1,2,3,4]
arr[2]=122;
console.log(arr)
*/

/*
PREMITIVE DATA TYPES:PREDEFIEND, BEING STORED IN VARIABLE(NUMBER,STRING,BIGINT,UNDEFIEND,NULL)
NON-PREMITIVE DATA TYPES:REF DATA TYPES,LOCATION DATA TYPES(OBJECT,STACK,QUEUE,HEAP,LINKEDLIST,ARRAY)
*/

/*
LET AND CONST ARE HOISTED IN TEMPORAL DEAD ZONE
TEMPORAL DEAD ZONE:IT IS TIME BETWEEN LET,CONST ARE HOISTED AND TILL INITILIZATION
LET AND CONST ARE IN SEPERATE MEMORY SPACE
 */
/*
let a=20;
var/let/const=10;
SYNTAX ERROR ALREADY DECLARED

b=20;
let b;
console.log(b)
ReferenceError: Cannot access 'b' before initialization

const b=100;
b=20;
console.log(b)
TypeError: Assignment to constant variable.

const b;
console.log(b)
SyntaxError: Missing initializer in const declaration
*/

//SHADOWING:SAME NAMED VARIABLE OUTSIDE BLOCK

/*
EXCUTION CONTEXT
GEC:JAVASCRIPT ENGINE RECEIVES SCRIPT FILE IT IS CREATE DEFAULT EXCUTION CONTEXT KNOWS AS GEC
TWO PHASES
1.CREATION PHASES(HOISTING)
2.EXCUTION PHASES(ASSIGNING VALUE,FUNCTION VALUE)

JS SYNCHRONOUS AND SINGLE THREADED
SYNCHRONOUS MEANS SPECIFIC ORDER AND SINGLE THREADED MEANS ONE COMMAND AT TIME
WHAR THINGS MAKE JAVASCRIPT MULTITHREADED??
ANS IS ASYNC AWAIT
*/

/*Hoisting is JavaScript's default behavior of moving 
all declarations to the top of the current scope (script or function).
Be carefull that only declaration gets hoisted NOT the initialitations*/

// var x = 5;
// alert("x is  = "+x+". y is = "+y);//result => x is = 5. y is = undefined.
// var y = 7;

/*
note that the code doesn't produce the error "y is not defined" like
it would if we would omit y. It executes but not in the way you would want.
*/

/*
POSTFIX AND PREFIX
POSTFIX:X++
PREFIX:++X

var x=1;
let y=1;
let ans=5+ x++;
let ans2=5+ ++y;
console.log(`POSTFIX RESULT-${ans} and PREFIX RESULT-${ans2}`)
*/

/*
LOGICAL OR AND AND
AND:console.log([1,2]&&[])
console.log([3,4]&&[5,6])
OR:console.log([1,2]||[])
console.log([3,4]||[5,6])

console.log(5&&2&&0||2&&3||15&&21)
CHECK NOTES
*/
/*
LOGICAL NOT AND BITWISE NOT
FALSY VALUE:0,"",NULL,UNDEFINED
*/

/*
// bit negation ~
//~a=-(a+1)
console.log(~-1)

//left shift <<
//N<<i ==> N*2**i
console.log(3 << 2)

//right shift >>
//N>>i ==> N/2**i
console.log(5 >> 2)
*/
/*
HTML PARSING 
LINE BY LINE JS FILE THEN IT DOWNLOAD FIRST THEN EXCUTE THEN PARSING CONTINUE
ASYNC VS DEFER
*/
/*
SPREAD AND REST
const arr=[1,2,3]
arr[50]=50;
let [a,b,c,...rest]=arr
console.log(rest)

const obj ={
    name:"hemendra",
    age:21,
    code:"A"
}
let ans={...obj,place:"Ahmedabad"}
console.log(ans)

//Using Object.assign
const obj1 ={
    name:"hemendra",
    age:21,
    code:"A"
}
let ans1=Object.assign(obj1,{pass:"a"})
console.log(ans1)
*/
/*
DEFAULT BINDING
let obj={
    name:"hem",
    printname:function(){
        return this.name
    }
}
console.log(obj.printname())
*/
/*
IMPLICIR BINDING
function myFunc(){
    console.log(this)
}
const obj={
    somekey:1,
    myFunc:myFunc
}
obj.myFunc()
 */

/*
NESTED BINDING
const obj={
    name:"hem",
    outer:function(){
        function inner(){
            console.log(this)
        }
        inner()
    }
}
obj.outer()
*/

