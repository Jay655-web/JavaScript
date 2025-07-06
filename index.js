// const   myCheckbox = document.getElementById("mycheckbox");
// const   mySubmit = document.getElementById("mysubmit");
// const   subResult = document.getElementById("subresult");
// const   paymentResult = document.getElementById("paymentresult");

// mySubmit.onclick = function(){
//     if(myCheckbox.checked){
//         subResult.textContent = "Thank you for subscribing!";
//     }else{
//         subResult.textContent = "You are not subscribed.";
//     }

//     if(document.getElementById("visabtn").checked){
//         paymentResult.textContent = "You have selected Visa.";
//     }else if(document.getElementById("mastercardbtn").checked){
//         paymentResult.textContent = "You have selected MasterCard.";
//     }else if(document.getElementById("paypalbtn").checked){
//         paymentResult.textContent = "You have selected PayPal.";
//     }else{
//         paymentResult.textContent = "No payment method selected.";
//     }
// }

const myCheckbox = document.getElementById("mycheckbox");
const visaBtn = document.getElementById("visabtn");
const masterCardbtn = document.getElementById("mastercardbtn");
const payPalbtn = document.getElementById("paypalbtn");
const mySubmit = document.getElementById("mysubmit");
const subResult = document.getElementById("subresult");
const paymentResult = document.getElementById("paymentresult");


mySubmit.onclick = function(){
   
    if(myCheckbox.checked){
        subResult.textContent = "You are subscribed!";
    }
    else{
        subResult.textContent = "You are NOT subscribed!";
    }

    if(visaBtn.checked){
        paymentResult.textContent = "You are paying with Visa.";
    }
    else if(masterCardbtn.checked){
        paymentResult.textContent = "You are paying with MasterCard.";
    }
    else if(payPalbtn.checked){
        paymentResult.textContent = "You are paying with PayPal.";
    }
    else{
        paymentResult.textContent = "You must select the payment type"
    }
}