'use strict';
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Nicole Nielsen
      Date:   05/19/2024

      Filename: project07-01.js
*/

let signupForm = document.getElementById('signup');

signupForm.addEventListener('submit', function (e) {
  let pwd = document.getElementById('pwd').value;
  let feedback = document.getElementById('feedback');
  // Add a command to prevent the browser from responding to the submit event
  e.preventDefault();

  let regex1 = /[A-Z]/;
  let regex2 = /\d/;
  let regex3 = /[!\$#%]/;

  if (pwd.length < 8) {
    // Create an if else statement with the following conditions and outcomes
    feedback.textContent = 'Your password must be at least 8 characters.';
  } else if (regex1.test(pwd) === false) {
    feedback.textContent = 'Your password must include an upper case.';
  } else if (regex2.test(pwd) === false) {
    feedback.textContent = 'Your password must include a number.';
  } else if (regex3.test(pwd) === false) {
    feedback.textContent =
      "Your password must include one of the following: '!$#%'.";
  } else {
    // once conditions are met, allow submission.
    signupForm.submit();
  }
});
