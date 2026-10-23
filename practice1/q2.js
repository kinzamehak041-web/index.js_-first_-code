const prompt=require("prompt-sync")();
let num1=Number(prompt("Enter your number 1: "))
let num2=Number(prompt("Enter your number 2: "))
let add=num1+num2;
let sub=num1-num2
let mul=num1*num2
let div=num1/num2
console.log("addition: ",add)
console.log("subtraction:",sub)
console.log("multiplication:",mul)
if(num2!=0){
    console.log("div",num1/num2)
}else{
    console.log("division is not possible by zero")
}