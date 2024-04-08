/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Nicole Nielsen
      Date: 04/06/2024

      Filename: project02-04.js
 */

// function to declare the following constants with their initial values
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;
let orderTotal = 0;

// Event Listener
// I had some difficulty with this part so a friend helped walk me through how to use querySelector and inputs, and also taught me more about breakpoints and using the browser to debug
let chickenChecked = document.querySelector('input[id=chicken]');
let halibutChecked = document.querySelector('input[id=halibut]');
let burgerChecked = document.querySelector('input[id=burger]');
let salmonChecked = document.querySelector('input[id=salmon]');
let saladChecked = document.querySelector('input[id=salad]');

chickenChecked.addEventListener('change', function () {
  if (this.checked) {
    calcTotal();
  }
});

halibutChecked.addEventListener('change', function () {
  if (this.checked) {
    calcTotal();
  }
});

burgerChecked.addEventListener('change', function () {
  if (this.checked) {
    calcTotal();
  }
});

salmonChecked.addEventListener('change', function () {
  if (this.checked) {
    calcTotal();
  }
});

saladChecked.addEventListener('change', function () {
  if (this.checked) {
    calcTotal();
  }
});

// Function to calculate the total
function calcTotal() {
  let cost = 0; // initial value of 0
  let tax = 0; // initial value of 0
  let totalCost = 0; // initial value of 0
  let buyChicken = document.getElementById('chicken').checked;
  let buyHalibut = document.getElementById('halibut').checked;
  let buyBurger = document.getElementById('burger').checked;
  let buySalmon = document.getElementById('salmon').checked;
  let buySalad = document.getElementById('salad').checked;

  // Use comparison operator to increase the value of cost variable by the value of the menu items
  cost += buyChicken ? CHICKEN_PRICE : 0;
  cost += buyHalibut ? HALIBUT_PRICE : 0;
  cost += buyBurger ? BURGER_PRICE : 0;
  cost += buySalmon ? SALMON_PRICE : 0;
  cost += buySalad ? SALAD_PRICE : 0;
  tax = cost * SALES_TAX;
  totalCost = cost + tax;

  // Food total
  document.getElementById('foodTotal').innerHTML = formatCurrency(cost);
  document.getElementById('foodTax').innerHTML = formatCurrency(tax);
  document.getElementById('totalBill').innerHTML = formatCurrency(totalCost);

  return totalCost;
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return '$' + value.toFixed(2);
}

window.addEventListener('load', main);
