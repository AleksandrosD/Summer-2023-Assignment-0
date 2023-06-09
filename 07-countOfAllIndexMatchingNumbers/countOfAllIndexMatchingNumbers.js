function countOfAllIndexMatchingNumbers(nums) {
  let acc=0;
	for(let i=0;i<nums.length;i++){
	if(i==nums[i])
	acc++;
	}
	return acc;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
