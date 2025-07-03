// COUNTER PROGRAM
// const decrease = document.getElementById(decreasebtn);
// const reset = document.getElementById(resetbtn);
// const increase = document.getElementById(increasebtn);
// const label = document.getElementById(countlabel);
// let count = 0;
// increasebtn.onclick = function(){
//     count++;
//     countlabel.textContent = count;

//     console.log(count)
// }
// decreasebtn.onclick = function(){
//     count--;
//     countlabel.textContent = count;

//     console.log(count)
// }
// resetbtn.onclick = function(){
//     count=0;
//     countlabel.textContent = count;

//     console.log(count)
// 
// GREETING PROGRAM
let name1 = document.getElementById("name").value;
let btn = document.getElementById("btn");
let newh = document.getElementById("htext");

btn.onclick = function(){
    newh.textContent = `Hello ${name1}, Welcome to the site.`;
}



