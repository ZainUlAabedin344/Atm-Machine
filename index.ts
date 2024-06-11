#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 743724;

let pinAns = await inquirer.prompt(
    [
        {
            name: "pin",
            type: "number",
            message: "Enter your pin"
        }
        
    ]
)
if (pinAns.pin == myPin) {
    console.log("Welcome to your account")
let operationAns = await inquirer.prompt(
    [
        {
            name: "operation",
            type: "list",
            choices: ["Withdraw","fast cash", "checkBalance"],
            message: "Select your operation",
        }
    ]
)
 if(operationAns.operation === "Withdraw"){
    let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                type: "number",
                message: "Enter your amount"
            }
        ]
    )
    if(amountAns.amount > myBalance){
        console.log("Insufficient balance")
    }
    else{
        console.log(`Your balance is: ${myBalance -=amountAns.amount}`)
    }
 }
 if(operationAns.operation === "fast cash"){
    let fastCashAns = await inquirer.prompt(
        [
            {
                name: "fastCash",
                type: "list",
                choices: ["500","1000","2000","5000","otherAmount"],
                message: "Select your fast cash"
            }
        ]
    )
    if(fastCashAns.fastCash === "500"){
        console.log(`Your balance is: ${myBalance -= 500}`)
    }else if(fastCashAns.fastCash === "1000"){
        console.log(`your balance is: ${myBalance -= 1000}`)
    }else if (fastCashAns.fastCash === "2000"){
        console.log(`Your balance is: ${myBalance -= 2000}`)
    }else if(fastCashAns.fastCash === "5000"){
        console.log(`Your balance is: ${myBalance -= 5000}`)
    }else if(fastCashAns.fastCash ==="otherAmount"){
        let otherAmount = await inquirer.prompt(
            [
                {
                    name:"otheramount",
                    type:"number",
                    message:"Enter your Amount"
                }
            ]
        )
        if(otherAmount.otheramount > myBalance){
            console.log("Insufficient Balance!")
        }else{
            console.log(`Your balance is: ${myBalance -=otherAmount.otheramount}`)
        }
    }

 }
 if(operationAns.operation === "checkBalance"){
    console.log(`Your Current Balance is:${myBalance}`)
 }
} 

else {
    console.log("Wrong pin")
}