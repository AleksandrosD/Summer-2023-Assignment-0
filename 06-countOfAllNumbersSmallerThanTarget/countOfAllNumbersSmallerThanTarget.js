function countOfAllNumbersSmallerThanTarget(nums, target) {
  let acc=0;
	for(let i=0;i<nums.length;i++){
		if(nums[i]<target)
		acc++;
	}
  return acc;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
