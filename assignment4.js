
// Batch-8, Assignment-4, Date: 08/08/2023

// Problem - 1: -----------------------------------

function cubeNumber(number) {
    if(typeof number === 'number'){
        return number ** 3;
    }
    else{
        return "Error! This is not a valid number.";
    }
}
let inputNumber = 4;
let result = cubeNumber(inputNumber);
// console.log(result);
let inputStr = "Hello World!";
let output = cubeNumber(inputStr);
// console.log(output);



// Problem - 2: ----------------------------------

function matchFinder(string1, string2) {
    if(typeof string1 !== "string" || typeof string2 !== "string"){
        return "Error! These are not valid string. Both fields should be valid";
    }

    if(string1.includes(string2) || string2.includes(string1)){
        return true;
    }
    {
        return false;
    }
}
// console.log(matchFinder("Hi, Nice to meet you", 123456));


// Problem - 3: ----------------------------------

function sortMaker(arr) {
    if (arr.length !== 2) {
        return "Invalid Input";
    }

    const [num1, num2] = arr;

    if (num1 < 0 || num2 < 0) {
        return "Invalid Input";
    } 
    
    else if (num1 === num2) {
        return "equal";
    } 
    
    else {
        const bigToSmallArr = [num1, num2].sort((a, b) => b - a);
        return bigToSmallArr;
    }
}

/*
console.log(sortMaker([2, 3]));
console.log(sortMaker([4, 4]));
console.log(sortMaker([4, -2]));
*/


// Problem - 4 : ----------------------------------

function findAddress(obj) {
    let street = obj.street || "__";
    let house = obj.house || "__";
    let society = obj.society || "__";

    return  street + ", " + house + ", " + society;

}
// const obj = { street: 10, house: "15A", society: "Earth Perfect" };
const obj = { street: 10,  society: "Earth Perfect" };
const address = findAddress(obj);
// console.log(address);



// Problem - 5 : ----------------------------------

function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "Oh! There is no money, what can I do?";
    }
    
    var totalChange = 0;
    for (var i = 0; i < changeArray.length; i++) {
        totalChange += changeArray[i];
    }

    if (totalChange >= totalDue) {
        return true;
    } else {
        return false;
    }
}

var changeArray = [1, 2, 5];
var totalDue = 10;
var canPayForChips = canPay(changeArray, totalDue);
// console.log(canPayForChips);