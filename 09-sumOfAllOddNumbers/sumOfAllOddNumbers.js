function sumOfAllOddNumbers(nums) {
  let acc=0;
	for(let i=0;i<nums.length;i++){
	if(nums[i]%2==1)
	acc++;}
	return acc;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
