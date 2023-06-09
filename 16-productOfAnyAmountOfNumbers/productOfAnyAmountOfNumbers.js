function productOfAnyAmountOfNumbers(...args) {
   if(args.length === 0)
	return 0;
  let a = 1;
  for(let i = 0; i < args.length; i++)
	a *= args[i];
  return a;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
