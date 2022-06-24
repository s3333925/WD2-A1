// Variables
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

// Function to display specified form tab
function showTab(n) {
  var x = document.getElementsByClassName("tab");
  // Display tab
  x[n].style.display = "block";
  // If at start of form...
  if (n == 0) {
    //...hide Previous button
    document.getElementById("prevBtn").style.display = "none";
  }
  // Otherwise...
  else {
    //..,show Previous button
    document.getElementById("prevBtn").style.display = "inline";
  }
  // If at end of form...
  if (n == x.length - 1) {
    //...change Next button text to "Submit"
    document.getElementById("nextBtn").innerHTML = "Calculate";
  }
  // Otherwise...
  else {
    //...keep Next button text as "Next"
    document.getElementById("nextBtn").innerHTML = "Next";
  }
}

// Function to work out which tab to display
function nextPrev(n) {
  // Store user input form values
  storeUserInput();

  var x = document.getElementsByClassName("tab");
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // If you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...hide form
    document.querySelector("form").style.display = "none";
    //...calculate results
    calculateResults();
    //...set results
    setUserResults();
    //...determine which results header to show
    selectResultsHeader();
    //...display results
    document.getElementById("results").style.display = "block";
  } else {
    // Otherwise, display the correct form tab
    showTab(currentTab);
  }
}

// Function to get user input values and store them as variables
function storeUserInput() {
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

// Function to calculate user input values
function calculateResults() {
  // Calculate total expenses per category
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
  // Calculate total expenses
  totalExpenses = (
    parseFloat(totalExpensesCat1) +
    parseFloat(totalExpensesCat2) +
    parseFloat(totalExpensesCat3)
  ).toFixed(2);
  // Calculate average expense per item
  avgItemExpense = (parseFloat(totalExpenses) / 9).toFixed(2);
  // Calculate net result
  netResult = (parseFloat(startAmount) - parseFloat(totalExpenses)).toFixed(2);
}

// Function to set the values to display in results pagge
function setUserResults() {
  document.getElementById("startAmountFinal").innerText = "$ " + startAmount;
  document.getElementById("totalExpensesCat1").innerText =
    "$ " + totalExpensesCat1;
  document.getElementById("totalExpensesCat2").innerText =
    "$ " + totalExpensesCat2;
  document.getElementById("totalExpensesCat3").innerText =
    "$ " + totalExpensesCat3;
  document.getElementById("avgItemExpense").innerText = "$ " + avgItemExpense;
  document.getElementById("totalExpenses").innerText = "$ " + totalExpenses;
  document.getElementById("netResult").innerText = "$ " + netResult;
}

// Function to determine which results header to show depending on the net result
function selectResultsHeader() {
  // If net result >= 0...
  if (netResult >= 0) {
    // ...display positive net result header
    document.getElementById("posNetResult").style.display = "block";
    // ...hide negaive net result header
    document.getElementById("negNetResult").style.display = "none";
  }
  // Otherwise...
  else {
    // ...display negaive net result header
    document.getElementById("negNetResult").style.display = "block";
    // ...hide positive net result header
    document.getElementById("posNetResult").style.display = "none";
  }
}

// Function to delete all form values
function resetForm() {
  // Reset all form values
  document.getElementById("form").reset();
  // Hide results page
  document.getElementById("results").style.display = "none";
  // Display form
  document.querySelector("form").style.display = "block";
  // Reset current tab counter
  currentTab = 0;
  // Display current tab
  showTab(currentTab);
}
