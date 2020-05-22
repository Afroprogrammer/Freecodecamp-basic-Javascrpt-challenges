/*The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

Note: The console will still have 'ReferenceError: myVar is not defined', but this will not cause the tests to fail.*/

/**HINT**
The code should not contain a global myVar variable.
You should add a local myVar variable.
 */





function myLocalScope() {
  'use strict';

  // Only change code below this line
 var myVar = 'jerusalem';
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);