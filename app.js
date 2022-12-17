const fname = document.querySelector(".fname");
const lname = document.querySelector(".lname");
const emailIn = document.querySelector(".email");
const password = document.querySelector(".password");
// error messages
const fnameErr = document.querySelector(".fname-error + span");
const lnameErr = document.querySelector(".lname-error + span");
const emailErr = document.querySelector(".email-error + span");
const passwordErr = document.querySelector(".password-error + span");
// error icons
const fnameErrIco = document.querySelector(".fname-error");
const lnameErrIco = document.querySelector(".lname-error");
const emailErrIco = document.querySelector(".email-error");
const passwordErrIco = document.querySelector(".password-error");



function formValidate(e){
    // email value
    const email = e.target.querySelector("[type ='email']").value;
    // regular Expression
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // first name check
    if(fname.value == ""){
        e.preventDefault();
        fnameErr.classList.add("show");
        fnameErrIco.classList.add("show");
        fname.classList.add("error");
    }
    else {
        fnameErr.classList.add("hide");
        fnameErrIco.classList.add("hide");
        fname.classList.add("no-error");

    }
    // last name check
    if(lname.value == ""){
        e.preventDefault();
        lnameErr.classList.add("show");
        lnameErrIco.classList.add("show");
        lname.classList.add("error");

    }
    else {
        lnameErr.classList.add("hide");
        lnameErrIco.classList.add("hide");
        lname.classList.add("no-error");

    }
    // email validate
    if(!regEx.test(String(email.toLowerCase()))){
        console.log(email);
        e.preventDefault();
        emailErr.classList.add("show");
        emailErrIco.classList.add("show");
        emailIn.classList.add("error");

    }
    else {
        emailErr.classList.add("hide");
        emailErrIco.classList.add("hide");
        emailIn.classList.add("no-error");

    }
    // password check
    if(password.value == ""){
        e.preventDefault();
        passwordErr.classList.add("show");
        passwordErrIco.classList.add("show");
        password.classList.add("error");

    }
    else {
        passwordErr.classList.add("hide");
        passwordErrIco.classList.add("hide"); 
        password.classList.add("no-error");

    }
}

// when clicked
form.addEventListener('submit',formValidate);


