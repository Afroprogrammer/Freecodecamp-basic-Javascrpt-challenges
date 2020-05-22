/**
 *When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns "It was true". When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns "It was false".
 */

/**HINT** 
trueOrFalse should be a function
trueOrFalse(true) should return a string
trueOrFalse(false) should return a string
trueOrFalse(true) should return "Yes, that was true"
trueOrFalse(false) should return "No, that was false"
*/

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if (wasThatTrue == true){
  return "Yes, that was true";
}
  return "No, that was false";

  // Only change code above this line

}
