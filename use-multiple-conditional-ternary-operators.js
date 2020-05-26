//Use multiple conditional operators in the checkSign function to check if a number is positive, negative or zero. The function should return "positive", "negative" or "zero".

/**HINT** 
checkSign should use multiple conditional operators

checkSign(10) should return "positive". Note that capitalization matters

checkSign(-12) should return "negative". Note that capitalization matters

checkSign(0) should return "zero". Note that capitalization matters
*/
function checkSign(num) {
 return(num===0)? "zero"
 :(num<0)? "negative"
 :"positive";
}

checkSign(10);
