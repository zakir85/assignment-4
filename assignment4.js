
// Problem - 1(basic math)

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



// Problem - 2

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


// Problem - 3

function sortMaker(arr) {
}

// Problem - 4

function findAddress(obj) {
}


// Problem - 5

function canPay(changeArray, totalDue) {
}