function sumOfMinimumAndMaximum(nums) {
  let min=0,max=0;
	for(let i=0;i<nums.length;i++){
	if(i==0){
	min=nums[i];
	max=nums[i];}
		else if(min>nums[i])
	min=nums[i];
		else if(max<nums[i])
	max=nums[i];}
	return min+max;
  
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
