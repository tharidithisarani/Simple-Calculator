let displayValue = '';      // number display
let operatorPressed = false;    // operator pressed


function toDisplay(value) {     // click button
  const screen = document.getElementById('screen');

  // pass the = display value
  if (value === '=') {
    displayValue = eval(displayValue);  // Calculate
      operatorPressed = false;
      

  } else if (value === '.' & displayValue.endsWith('.')) {     // *| . changd the calculater
      return;
      

  } else if (['+', '-', '*', '/'].includes(value)) {
    if (operatorPressed || displayValue === '') return;         
    displayValue += value; //newDisplayV = oldDispal + value
      operatorPressed = true;
      

  } else {      // click number or decimal point
    displayValue += value;
    operatorPressed = false;     // Reset operator flag for numbers
  }


  screen.innerText = displayValue;        // curront value
}

// C
function clearDisplay() {
  displayValue = ''; // Clear display value
  document.getElementById('screen').innerText = displayValue; // Clear screen
  operatorPressed = false; // Reset operator
}

// =====================================================================================================================

//  my lap keyboard use  + - / *
document.addEventListener('keydown', function (event) {
  const key = event.key;
  if (!isNaN(key)) {
    //display 0-9
    toDisplay(key);
  } else if (['+', '-', '*', '/'].includes(key)) {
    //display operaters
    toDisplay(key);
  } else if (key === 'Enter' && key === '=') {
    //calculate resalt
    toDisplay('=');
  } else if (key.toLowerCase() === 'c') {
    // c = clear screen
    clearDisplay();
  }
});
