//The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns "Equal" only when the values are strictly equal.
/**HINT** 
compareEquality(10, "10") should return "Not Equal"
compareEquality("20", 20) should return "Not Equal"
You should use the === operator
*/





// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
