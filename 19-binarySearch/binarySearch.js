class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
     if(nums.length === 0)
	return false
    let m = parseInt(nums.length / 2)
    if (nums[m] === target)
	return true
    else if (target < nums[m])
        return this.binarySearch(nums.slice(0, m), target)
      else
        return this.binarySearch(nums.slice(m + 1), target)
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
