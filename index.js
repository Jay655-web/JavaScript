// const minnum = 1;
// const maxnum = 100;
// const answer = Math.floor(Math.random() * (maxnum-minnum + 1)) + minnum;

// console.log(answer);

// let attempt = 0;
// let guess;
// let running = true;


// while(running){
     
//     guess = window.prompt(`Guess a number between ${minnum} - ${maxnum}`);

//     guess = Number(guess);
//     console.log(typeof guess, guess);

//     if(isNaN(guess)){
//         window.alert("Please enter a valid number");
//     }
//     else if(guess < minnum || guess > maxnum){
//         window.alert("Enter a valid number")
//     }
//     else{
//         attempt++;
//         if(guess < answer){
//             window.alert("TOO LOW, TRY AGAIN!");
//         }
//         else if(guess > answer){
//             window.alert("TOO HIGH, TRY AGAIN!");
//         }
//         else{
//             window.alert(`CORRECT! The answer was ${answer}. It took you ${attempt} attempts.`);
//             running = false;
//         }
//     }
// }



    //FUNCTIONS


// function happybirthday(username, age){
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday to you!");
//     console.log(`Happy Birthday dear ${username}`);
//     console.log("Happy Birthday to you!");
//     console.log(`You are ${age} years old`);
// }

// happybirthday("Edmond", 21);
// happybirthday("Spongbob", 30);
// happybirthday("Partrick", 37)


// function add(x,y){
//     let result = x+y;
//     return result;
// }

// function sub(x,y){
//     return x-y;
// }

// console.log(sub(2,3));

// function isEven(number){

//     return number % 2 == 0 ? true : false;
//}

// //Variable scope

// let x = 3;

// function2();

// function function1(){
//     let x = 1;
//    console.log(x); 
// }

// function function2(){
//     let x = 2;
//    console.log(x); 
// }



// const textBox = document.getElementById("textbox");
// const toFerenhiet = document.getElementById("toferenhiet");
// const toCelsius = document.getElementById("tocelsius");
// const Result = document.getElementById("result");
// let temp;

// function convert(){

//     if(toFerenhiet.checked){
//         temp = Number(textBox.value);
//         temp = temp * 9 / 5 + 32;
//         Result.textContent = temp.toFixed(1) + "F";
//     }
//     else if(toCelsius.checked){
//         temp = Number(textBox.value);
//         temp = (temp - 32) * (5/9);
//         Result.textContent = temp.toFixed(1) + "C";
//     }
//     else{
//         Result.textContent = "Select a unit";
//     }
// }

// let day = 3;

// switch(day){
//     case 1:
//         console.log("it is monday");
//         break;
//     case 2:
//         console.log("It is Tuesday");
//         break;
//     case 3:
//         console.log("It is Wenesday");
//         break;
//     case 4:
//         console.log("It is Thursday");
//         break;
//     case 5:
//         console.log("It is Friday");
//         break;
//     case 6:
//         console.log("It is Saturday");
//         break;
//     case 7:
//         console.log("It is Sunday");
//         break;
//     default:
//         console.log(`${day} is not valid`);
//         break;
// }

// ARRAY
//let fruit = ["apple", "orange", "banana","coconut"];

// fruit.push("coconut");
// fruit.pop();
// fruit.unshift("mango");
// fruit.shift();

// let numofFruits = fruit.length;
// let index = fruit.indexOf("apple");


// console.log(index);

// fruit.sort().reverse();

// for(let i = 0; i < fruit.length; i++){
//     console.log(fruit[i]);
// }

//2D ARRAY

// const matrix = [[1, 2, 3], 
//                 [4, 5, 6],
//                 [7, 8, 9],
//                 ['*', 0, '#']];

// TICK TAC TOE

// matrix[0][0] = 'x';
// matrix[0][1] = 'o';
// matrix[0][2] = 'x';

// matrix[1][0] = 'o';
// matrix[1][1] = 'x';
// matrix[1][2] = 'o';

// matrix[2][0] = 'x';
// matrix[2][1] = 'o';
// matrix[2][2] = 'x';

// for(let row of matrix){
//     const rowstring = row.join(' ');
//     console.log(rowstring);
// }

//SPREAD OPEPRATOR

// let number = [1, 2, 3, 4, 5];
// let maxium = Math.max(...number);
// let minimum = Math.min(...number);


// console.log(maxium);
// console.log(minimum);

// let username = "edmond";
// let letters = [...username].join('-');

// console.log(letters);


//REST PARAMETERS

// function openfridge(...foods){
//     console.log(...foods);
// }

// function getfood(...foods){
//     return foods;
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";

// // openfridge(food1, food2, food3, food4, food5);

// const foods = getfood(food1, food2 ,food3);

// console.log(foods);


//RANDOM PASSWORD GENERATOR


function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChar = "";
    let password = "";

    allowedChar += includeLowercase ? lowercaseChars : "";
    allowedChar += includeUppercase ? upppercaseChars : "";
    allowedChar += includeNumbers ? numberChars : "";
    allowedChar += includeSymbols ? symbolChars : "";

   // console.log(allowedChar);

    if(length <= 0){
        return "(password lenght must be at least 1)";
    }
    if(allowedChar.length === 0){
        return "(At least one set of characters needs to be selected)";
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChar.length);
        password += allowedChar[randomIndex];
    }
    
    return password;

}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const passsword = generatePassword(passwordLength,
                                     includeLowercase,
                                        includeUppercase,
                                            includeNumbers,
                                                includeSymbols);


console.log(`Generated Password: ${passsword}`);
