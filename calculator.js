"use strict";

// Step 01: Create Functions for Addition, Subtraction, Multiplication, and Division
const fAdd = function (num1,num2){

return num1+num2;

};

const fSub = function (num1,num2){

return num1-num2;

};

const fMul = function (num1,num2){

return num1*num2 ;

};

const fDiv = function (num1,num2){
    if (num2===0) { return "Cannot divide by zero";
        
    }
    else return num1/num2;   
    
};

// Step 02: Create a Validation Function for Inputs

const NumValidate=function(num1,num2){

if(typeof num1==="number"&&typeof num2==="number"&&!isNaN(num1)&&!isNaN(num2)) 
    {return true;}
console.log("Both inputs must be numbers")
return null;
};



// Step 03: Create a Calculator Function to Combine the Above Functions

const calculator=function(num1,num2,operation){

    if(NumValidate(num1,num2)){
        switch(operation){
            case "add":
                console.log(fAdd(num1,num2));
            break;

            case "subtract":
                console.log(fSub(num1,num2));
            break;

            case "multiply":
                console.log(fMul(num1,num2));
            break;

            case "divide":
                console.log(fDiv(num1,num2));
            break;

            default:
                console.log('Invalid operation. Please use "add", "subtract", "multiply", or "divide".');

        }
    }
return;
};

//Test case 
calculator(10, 5, "add"); // returns 15
calculator(10,"a", "divide"); // returns 2
calculator(10,0,"divide"); // returns 'Cannot divide by zero'
calculator(10, 5, "unknown"); // returns 'Invalid operation. Please use "add", "subtract", "multiply", or "divide".'

calculator(2, 7, "add");  // return 9
calculator(25, 13, "subtract"); //return 12
calculator(10, 5,"multiply" );  // return 50

