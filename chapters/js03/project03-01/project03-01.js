/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Nicole Nielsen
      Date:   04/13/2024

      Filename: project03-01.js
*/

// Variable for menu items.
let menuItems = document.getElementsByClassName('menuItem'); // increase counter by 1 each iteration
for (let i = 0; i < menuItems.length; i++) {
  // add event listener on click
  menuItems[i].addEventListener('click', calcTotal);
}

// Function to calculate total
function calcTotal() {
  // declare order total variable, with initial value of 0
  let orderTotal = 0;
  for (i = 0; i < 5; i++) {
    if (menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value) * 1;
    }
    document.getElementById('billTotal').innerHTML = formatCurrency(orderTotal);
  }
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return '$' + value.toFixed(2);
}
