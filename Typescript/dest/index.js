"use strict";
// basic types
let a = 10;
let month = "February";
console.log(month);
let addition = (num) => {
    return 10 + num;
};
console.log(addition(10));
// Arrays
// Implicit:
// let inumArray = [1,2,3]
// let istrArray = ['a','b','c']
// let iboolArray = [true, false]
// Explicit:
// let enumArray : number[] = [1,2,3]
// let estrArray : string[] = ['a','b','c']
// let eboolArray : boolean[] =[true, false]
// declare array
// let inumArray = []
// let istrArray = []
// let enumArray : number[] = []
// let estrArray : string[] = []
// push
// inumArray.push(4)
// istrArray.push("d")
// enumArray.push(5)
// estrArray.push("e")
// console.log(inumArray);
// console.log(istrArray);
// console.log(enumArray);
// console.log(estrArray);
// Readonly array
// let estrArray : readonly string[] = ['a','b','c']
// estrArray.push("d")   //Errors
// union type represented by | sybol (OR) synbol
// let uniontype = ['one', 1,true]
// uniontype.push(2)
// console.log(uniontype);
// let errorcode:(string | number | boolean)[] = ['one', 1,true]
// errorcode.push(5)
// console.log(errorcode);
// Anytype:
// let anyType:any[]=[1,'new', true]
// null and undefined:
// let x:null=null
// let y:undefined=undefined
