function frequencyCounter(word) {
  let fr = {}
  for(let i = 0; i < word.length; i++){
	if(fr[word[i]])
	fr[word[i]] += 1
	else
	fr[word[i]] = 1
   }
  return fr
}

// Do not edit this line;
module.exports = frequencyCounter;
