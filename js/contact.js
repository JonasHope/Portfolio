const form = document.querySelector(`form`);
const successfully = document.querySelector(`.successfully`);
const button = document.querySelector(".submit_btn");

const fullName = document.querySelector(`#name`);
const nameError = document.querySelector(`#name-error`);

const subject = document.querySelector(`#subject`);
const subjectError = document.querySelector(`#subject-error`);

const email = document.querySelector(`#email`);
const emailError = document.querySelector(`#email-error`);

const textArea = document.querySelector(`#textarea`);
const textError = document.querySelector(`#text-error`);



function formCheck(event) {
    event.preventDefault();

    if (check(fullName.value, 5) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    };

    if (check(subject.value, 15) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    };

    if (checkEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    };

    if (check(textArea.value, 25) === true) {
        textError.style.display = "none";
    } else {
        textError.style.display = "block";
    };

    if (check(fullName.value, 5) && check(subject.value, 15) && checkEmail(email.value) && check(textArea.value, 25)) {
        textArea.value = "";
        subject.value = "";
        successfully.style.display = "block";
        setTimeout(function() {
            window.location.href = "index.html";
        },5000);
    };
};

form.addEventListener("submit", formCheck);

function check(value, length) {
    if (value.trim().length > length) {
        return true;
    } else {
        return false;
    };
};

function checkEmail(email) {
    const regEx = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    const match = regEx.test(email);
    return match;
};