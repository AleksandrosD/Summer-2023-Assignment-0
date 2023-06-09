function countOfAllBooleansAndStrings(arr) {
  let a=0;
	for(let i=0;i<arr.length;i++){
		if(typeof arr[i]=="string"||typeof arr[i]=="boolean")
			a++;}
	return a;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
