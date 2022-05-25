
const firstName = document.querySelector('.firstname');
const firstNameError = document.querySelector('.firstname_error');

const lastName = document.querySelector('.lasttname');
const lastNameError = document.querySelector('.lastname_error');

const email = document.querySelector('.email');
const emailError = document.querySelector('.email_error');

const password = document.querySelector('.password');
const passwordError = document.querySelector('.password_error');

const submtBtn = document.querySelector('#submitbtn');

const icon = document.querySelectorAll('.icon');
// console.log(icon[0]);

submtBtn.addEventListener('click', formValid)

let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');     

function formValid() {
    //firstname
    if (firstName.value == "")
    {
        firstName.classList.add("error_focus");
        firstNameError.style.display = "block";
        icon[0].style.display = "block";
    }
    else {
        firstName.classList.remove("error_focus");
        firstNameError.style.display = "none";
        icon[0].style.display = "none";
    }

    //lastname
    if (lastName.value == "")
    {
        lastName.classList.add("error_focus");
        lastNameError.style.display = "block";
        icon[1].style.display = "block";
    }
    else {
        lastName.classList.remove("error_focus");
        lastNameError.style.display = "none";
        icon[1].style.display = "none";
    }

    //email
    if (regex.test(email.value) == true)
    {
        email.classList.remove("error_focus");
        emailError.style.display = "none";
        icon[2].style.display = "none";
    }
    else {
        email.classList.add("error_focus");
        emailError.style.display = "block";
        icon[2].style.display = "block";
    }

    //password
    if (password.value == "")
    {
        password.classList.add("error_focus");
        passwordError.style.display = "block";
        icon[3].style.display = "block";
    }
    else {
        password.classList.remove("error_focus");
        passwordError.style.display = "none";
        icon[3].style.display = "none";
    }
}