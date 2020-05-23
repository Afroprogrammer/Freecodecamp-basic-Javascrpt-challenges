//Change the chained if/else if statements into a switch statement.
/**HINT** 
You should not use any else statements anywhere in the editor
You should not use any if statements anywhere in the editor
You should have at least four break statements
chainToSwitch("bob") should be "Marley"
chainToSwitch(42) should be "The Answer"
chainToSwitch(1) should be "There is no #1"
chainToSwitch(99) should be "Missed me by this much!"
chainToSwitch(7) should be "Ate Nine"
chainToSwitch("John") should be "" (empty string)
chainToSwitch(156) should be "" (empty string)
*/

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case "bob":
      answer = "Marley";
      break; 
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);
