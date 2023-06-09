function pairSum(nums, target) {
	if(nums.length<=1){
	throw new Error("Just one number in the array")}
  let a=0;
	for(let i=0;i<nums.length;i++){
		for(let j=0;j<nums.length;j++){
		if(i==j){
		j++;}
		if(nums[i]+nums[j]==target)
		return true		
		}

	}
	return false


}

// Do not edit this line;
module.exports = pairSum;
