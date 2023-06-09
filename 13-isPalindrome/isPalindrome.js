function isPalindrome(word) {
  let ans=word;
  ans=word.split("").reverse().join("")
  if(ans==word)
	return true
  else 
	return false
}

// Do not edit this line;
module.exports = isPalindrome;
