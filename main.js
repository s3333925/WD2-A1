// Current tab is set to be the first tab (0)
var currentTab = 0;
// Display the current tab
showTab(currentTab);

var startAmount;
var accomodationExpenses;
var totalExpenses;
var netResult;
var lll;

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
  startAmount = document.getElementById("startAmountInput").value;
  lll = document.getElementById("x2").value;
}

function setUserResults() {
  //
  totalExpenses = (parseFloat(startAmount) + parseFloat(lll)).toFixed(2);
  netResult = (parseFloat(startAmount) - parseFloat(totalExpenses)).toFixed(2);
  //
  document.getElementById("lol").innerText = startAmount;
  document.getElementById("lol2").innerText = totalExpenses;
}
