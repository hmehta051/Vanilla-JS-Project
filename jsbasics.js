//REST
// const arr=["a1","b","c1","d"]
// const [a,,c,...rest]=arr
// console.log(rest,a,c)

//SPREAD
// const arr1=[1,2,3,4]
// const arr2=[5,6,7,8]
// console.log(arr1.concat(arr2))
// console.log([...arr1,...arr2])

// const personTwo={
//     name:"sally",
//     age:32,
//     food:"watermelon",
//     add:{
//         city:"somewhere else",
//         state:"another"
//     }
// }
// //const {name:firstname="john",food="mango",age}=personTwo
// //const {name:firstname,...rest}=personTwo
// const {name:firstname,add:{city}}=personTwo
// //console.log(firstname,food)
// //console.log(rest)
// console.log(city)

//OBJECT OVERIDE
// const personTwo={
//     name:"sally",
//     age:32,
//     food:"watermelon",
//     add:{
//         city:"somewhere else",
//         state:"another"
//     }
// }
// const personOne={
//     name:"rohit",
//     age:32
// }
// const personThree={...personTwo,...personOne}
// console.log(personThree)

// ARROW FUNCTION
/*
ADVANTAGES
1.ARROW FUNCTION ALWAYS SUPPORT FUNCTION EXPRESSION
2. SHORTER SYNTAX
3.DOESN'T HAVE OWN THIS OBJECT,ARGUMENTS,SUPER
4. ARRAOW FUNCTION AUTOMATICALLY BINDS THIS
5.ARROW FUNCTION THIS REFERS WHAT DEFIND IN BLOCK SCOPE

DISADNATGES
*/
// class Person{
//     constructor(name){
//         this.name=name
//     }
//     printNameArrow(){
//         setTimeout(()=>{
//             // console.log(this,"k")
//             // console.log(this.name)
//         },1000)
//     }
//     printNameNormal(){
//         setTimeout(function(){
//             this.name="j"
//             console.log("this",this)
//             console.log(this.name)
//         },1000)
//     }
// }
// let person=new Person("bob")
// person.printNameArrow()
// person.printNameNormal()
// console.log(this.name)

// const cameras={
//     price:300,
//     weight:2000,
//     des:function(){
//         return `this camera is of ${this.price} ${this.weight}`
//     }
// }
// console.log(cameras.des())
// NEVER USE ARROW FUNCTION IN METHODS AND CONSTRUCTOR
// const cameras={
//     price:300,
//     weight:2000,
//     des:()=>{
//         return `this camera is of ${this.price} ${this.weight}`
//     }
// }
// let a=cameras.des.bind(this)
// console.log(a())
// abc()
// var abc=()=>{
//     console.log("hoisted")
// }

//IMPLICIT AND EXPLICIT RETURN

// const isEven=num=>num%2==0
// console.log(isEven(6))
//EXPLICIT RETURN 
// const isEven=(num)=>{
//     return num%2==0
// }
//IMPLICIT RETURN 
// const makeCard=()=>({key:"key",value:"value"})
// console.log(makeCard())


/*
FUNCTION STATEMENT ALSO CALLED FUNCTION DECLARTION

function state(){

}

FUNCTION EXPRESSION
var state=function(){

}
var state=()=>{

}

ANNOYMOUS FUNCTION
function(){

}

ANNOUMOUS FUNCTION EXPRESSION
var b=function(){

}
 NAMED FUNCTION EXPRESSION
 var b=function xyz(){

 }
*/
// var b=function xyz(){
//     console.log(xyz)
//      console.log("xuz")
// }
// b()
// console.log(xyz)
// //console.log(b())


/*
FIRST CLASS FUNCTIONS
*/
// var b=function(param1){
//     return function xyz(){

//     }
// }
// console.log(b())
// var b = function (param1) {
//     return param1*2
// }
// let temp=function(a,b){
//     return a+b
// }
// console.log(b(temp(2,3)))
// let a=100;
// {
//     let a=10;
//     console.log(a)
// }

// const a=100;
// {
//     const a=120;
//     {
//         const a=140;
//         console.log(a)
//     }
//     console.log(a)
// }
// console.log(a)

//CALL APPLY BIND
// let user1={
//     firstname:"rohitkumar",
//     lastname:"singh",
//     // printName:function(){
//     //     console.log(this.firstname,this.lastname)
//     // }
// }
// let printName=function(home,age){
//     console.log(this.firstname,this.lastname,home,age)
// }
// let user2={
//     firstname:"hemendra",
//     lastname:"mehta"
// }
// printName.call(user2,"abc",21)
// printName.apply(user2,["abc",21])
// let temp=printName.bind(user2,"abc",21)
// temp()


//IIFE
// (function abc(){
//     console.log("hello")
// })()
// (()=>{

// })()


//CLOSURE

// function greet(){
//     let n='raj'
//     return function(){
//         console.log(n)
//     }
// }
// let x=greet()
// console.log(x)
// x()

//CLOSURE+SETTIMEOUT
//PROBLEM PRINT K 1 2 3 4 5 WITHOUT USING LET KEYWORD
// function x(){
//     for(var i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i)
//         },i*1000)
//     }
//     console.log("k")
// }
// x()
// // SOLUTION USE CLOSURE 
// function x(){
//     for(var i=1;i<=5;i++){
//         function close(i){
//             setTimeout(function(){
//                 console.log(i)
//             },i*1000)
//         }
//         close(i)
//     }
//     console.log("k")
// }
// x()

// problem statement, make this function curring
// function x(a,b,c,d){
//     return a+b+c+d
// }
// console.log(x(1,2,3,4))

// let multiply=function(x,y){
//     console.log(x*y)
// }
// let multiplywith2=multiply.bind(this,2)
// multiplywith2(5)
// let multiplywith3=multiply.bind(this,3)
// multiplywith3(5)

// const addsum=(a)=>{
//     return (b)=>{
//         return (c)=>{
//             return (d)=>{
//                 return a+b+c+d
//             }
//         }
//     }
// }
// console.log(addsum(1)(2)(3)(4))

/*
POLYFILL
polyfill is a piece code used to provide modern functionality on older browser that do not nativery support it
*/

// splice,slice

 //let arr=[1,2,3,4,5,6]
// // slice(start,end)
// console.log(arr.slice(-6,2))

//splice(start,deletecount,item1,item2)
// const months=['jan','march','april','june']
// months.splice(1,2,'feb')
// console.log(months)

//CALLBACK FUNCTION

// function x(y){
//     console.log("x")
//     y()
// }
// x(function y(){
//     console.log("y")
// })
// setTimeout(()=>{
//     console.log("timer")
// },1000)

// var obj={
//     firstname:"hemendra",
//     lastname:"mehta",
//     concatt:function(){
//         console.log(`My name is ${this.firstname} `)
//     }
// }

// let obj2={
//     myname:"abcd",
//     lastname2:"xyz"
// }
// console.log(obj)


// obj2.__proto__=obj


