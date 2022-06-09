// Current tab is set to be the first tab (0)
var currentTab = 0;
var startAmount;
var item1Cat1Expense;
var item2Cat1Expense;
var item3Cat1Expense;
var item1Cat2Expense;
var item2Cat2Expense;
var item3Cat2Expense;
var item1Cat3Expense;
var item2Cat3Expense;
var item3Cat3Expense;
var totalExpensesCat1;
var totalExpensesCat2;
var totalExpensesCat3;
var avgItemExpense;
var totalExpenses;
var netResult;

// Display the current tab
showTab(currentTab);

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");

  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
}

function nextPrev(n) {
  storeUserInput();
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...hide form:
    document.querySelector("form").style.display = "none";
    //...calculate results:
    calculateResults();
    //...set results:
    setUserResults();
    //...display results:
    document.getElementById("results").style.display = "block";
  } else {
    // Otherwise, display the correct tab:
    showTab(currentTab);
  }
}

function storeUserInput() {
  //
  startAmount = document.getElementById("startAmount").value;
  startAmount = parseFloat(startAmount).toFixed(2);
  item1Cat1Expense = document.getElementById("item1Cat1").value;
  item2Cat1Expense = document.getElementById("item2Cat1").value;
  item3Cat1Expense = document.getElementById("item3Cat1").value;
  item1Cat2Expense = document.getElementById("item1Cat2").value;
  item2Cat2Expense = document.getElementById("item2Cat2").value;
  item3Cat2Expense = document.getElementById("item3Cat2").value;
  item1Cat3Expense = document.getElementById("item1Cat3").value;
  item2Cat3Expense = document.getElementById("item2Cat3").value;
  item3Cat3Expense = document.getElementById("item3Cat3").value;
}

function calculateResults() {
  // calculate total expenses per category
  totalExpensesCat1 = (
    parseFloat(item1Cat1Expense) +
    parseFloat(item2Cat1Expense) +
    parseFloat(item3Cat1Expense)
  ).toFixed(2);
  totalExpensesCat2 = (
    parseFloat(item1Cat2Expense) +
    parseFloat(item2Cat2Expense) +
    parseFloat(item3Cat2Expense)
  ).toFixed(2);
  totalExpensesCat3 = (
    parseFloat(item1Cat3Expense) +
    parseFloat(item2Cat3Expense) +
    parseFloat(item3Cat3Expense)
  ).toFixed(2);
  // calculate total expenses
  totalExpenses = (
    parseFloat(totalExpensesCat1) +
    parseFloat(totalExpensesCat2) +
    parseFloat(totalExpensesCat3)
  ).toFixed(2);
  // calculate average item expense
  avgItemExpense = (parseFloat(totalExpenses) / 9).toFixed(2);
  // calculate net result
  netResult = (parseFloat(startAmount) - parseFloat(totalExpenses)).toFixed(2);
}

function setUserResults() {
  //
  document.getElementById("startAmountFinal").innerText = "$ " + startAmount;
  document.getElementById("totalExpensesCat1").innerText =
    "$ " + totalExpensesCat1;
  document.getElementById("totalExpensesCat2").innerText =
    "$ " + totalExpensesCat2;
  document.getElementById("totalExpensesCat3").innerText =
    "$ " + totalExpensesCat3;
  document.getElementById("avgItemExpense").innerText = "$ " + avgItemExpense;
  document.getElementById("totalExpenses").innerText = "$ " + totalExpenses;
  document.getElementById("totalExpensesRes").innerText =
    "$ (" + totalExpenses + ")";
  document.getElementById("netResult").innerText = "$ " + netResult;
}

function resetForm() {
  // reset all form values
  document.getElementById("regForm").reset();
  // hide results
  document.getElementById("results").style.display = "none";
  // display form
  document.querySelector("form").style.display = "block";
  // reset current tab counter
  currentTab = 0;
  // display current tab
  showTab(currentTab);
}
