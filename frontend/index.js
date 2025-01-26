
document.addEventListener('DOMContentLoaded',()=>{


// DOM Elements
const signUpRestaurant = document.getElementById('signUpRestaurant');
const signUpCharity = document.getElementById('signUpCharity');
const signUpCustomer = document.getElementById('signUpCustomer');
const loginBtn = document.getElementById('loginBtn');
const signUpFormContainer = document.getElementById('signUpFormContainer');
const loginFormContainer = document.getElementById('loginFormContainer');
const closeSignUpForm = document.getElementById('closeSignUpForm');
const closeLoginForm = document.getElementById('closeLoginForm');


function openSignUpForm() {
  signUpFormContainer.classList.add('active');
}


function openLoginForm() {
  loginFormContainer.classList.add('active');
}

function closeSignUpFormHandler() {
  signUpFormContainer.classList.remove('active');
}

function closeLoginFormHandler() {
  loginFormContainer.classList.remove('active');
}


signUpRestaurant.addEventListener('click', openSignUpForm);
signUpCharity.addEventListener('click', openSignUpForm);
signUpCustomer.addEventListener('click', openSignUpForm);
loginBtn.addEventListener('click', openLoginForm);
closeSignUpForm.addEventListener('click', closeSignUpFormHandler);
closeLoginForm.addEventListener('click', closeLoginFormHandler);


document.getElementById('signUpForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const userType = document.getElementById('userType').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  console.log(`Signed up as ${userType}: ${name}, ${email}, ${password}`);
  closeSignUpFormHandler();
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  console.log(`Logged in as: ${email}, ${password}`);
  closeLoginFormHandler();
});

});