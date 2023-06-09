function sumOfNumsWithinARange(nums, start, end) {
  let acc=0;
	for(let i=0;i<nums.length;i++){
	if(nums[i]>=start&&nums[i]<=end)
	acc++;}
	return acc;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
