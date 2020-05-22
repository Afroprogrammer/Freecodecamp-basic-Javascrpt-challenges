//Add the greater than operator to the indicated lines so that the return statements make sense
/**HINT** 
testGreaterThan(0) should return "10 or Under"
testGreaterThan(10) should return "10 or Under"
testGreaterThan(11) should return "Over 10"
testGreaterThan(99) should return "Over 10"
testGreaterThan(100) should return "Over 10"
testGreaterThan(101) should return "Over 100"
testGreaterThan(150) should return "Over 100"
You should use the > operator at least twice
*/

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10 ) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(15);
