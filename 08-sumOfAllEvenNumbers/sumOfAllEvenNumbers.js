function sumOfAllEvenNumbers(nums) {
  let acc=0;
	for(let i=0;i<nums.length;i++){
		if(nums[i]%2==0||nums[i]==0)
			acc++;}
	return acc;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
