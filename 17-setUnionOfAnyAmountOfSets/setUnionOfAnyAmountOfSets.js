function setUnionOfAnyAmountOfSets(...args) {
  let a = new Set()
  for(let i of args)
	for(let j of i)
		a.add(j)
  return a
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
