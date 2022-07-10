const yourname = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const date = document.getElementById("date");
const form = document.getElementById("form");
const errorName = document.getElementById("error-name");
const errorEmail = document.getElementById("error-email");
const errorPhone = document.getElementById("error-phone");
const errorDate = document.getElementById("error-date");
const correctName = document.getElementById("correct-name");
const correctEmail = document.getElementById("correct-email");
const correctPhone = document.getElementById("correct-phone");
const correctDate = document.getElementById("correct-date");
const first = document.getElementById("first");
const regex = /^([@redberry.com])$/;
const emailValue = email.value;


form.addEventListener('submit', (e) => {
    e.preventDefault();
    // validation for name
    if (yourname.value === null || yourname.value.length < 2){
        errorName.style.visibility="visible";
        yourname.style.background= "rgba(255, 0, 50, 0.3)";
        yourname.style.color= "rgba(255, 0, 50, 1)";
    }
    if (yourname.value.length >= 2){
        errorName.style.visibility="hidden";
        correctName.style.visibility="visible"
        first.style.background="#E9FAF1"
        yourname.style.background= "rgba(255, 255, 255, 0.85)";
        yourname.style.color= "rgba(0, 0, 0, 1)";
    }
    //  validation for email
    if (email.value == null || regex.test(emailValue)==false){
        errorEmail.style.visibility="visible";
        email.style.background= "rgba(255, 0, 50, 0.3)";
        email.style.color= "rgba(255, 0, 50, 1)";
    }
    if (email.value.length >= 2 || regex.test(emailValue)==true){
        errorEmail.style.visibility="hidden";
        correctEmail.style.visibility="visible";
        first.style.background="#E9FAF1"
        email.style.background= "rgba(255, 255, 255, 0.85)";
        email.style.color= "rgba(0, 0, 0, 1)";
    }
    // validation for phone number
    if (number.value == null || number.value.length != 9){
        errorPhone.style.visibility="visible";
        number.style.background= "rgba(255, 0, 50, 0.3)";
        number.style.color= "rgba(255, 0, 50, 1)";
    }
    if (number.value.length == 9 ){
        errorPhone.style.visibility="hidden";
        correctPhone.style.visibility="visible"
        first.style.background="#E9FAF1"
        number.style.background= "rgba(255, 255, 255, 0.85)";
        number.style.color= "rgba(0, 0, 0, 1)";
    }
    // validation for birth date
    if (date.value == null || date.value.length < 9){
        errorDate.style.visibility="visible";
        date.style.background= "rgba(255, 0, 50, 0.3)";
        date.style.color= "rgba(255, 0, 50, 1)";     
    }
    if (date.value.length >= 2){
        errorDate.style.visibility="hidden";
        correctDate.style.visibility="visible"
        first.style.background="#E9FAF1"
        date.style.background= "rgba(255, 255, 255, 0.85)";
        date.style.color= "rgba(0, 0, 0, 1)";
    }
    if (yourname.value.length >= 2 && email.value.length >= 2 && regex.test(emailValue)==true && number.value.length == 9 && date.value.length >= 2){
        first.style.background="#E78AF1"
    }
   
});