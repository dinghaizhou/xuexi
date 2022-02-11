// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组 是数组中的一个连续部分。
[1,2,-2,-3]
/**
 * @param {number[]} nums
 * @return {Obj}
 */
var maxSubArray = function(nums) {
    let res = {
        max: nums[0],
        benginIndex: 0,
        endIndex: 0
    }
    let newBeginIndex = 0;

    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        if(sum > 0) {
            sum += nums[i]
        } else {
            sum = nums[i]
            newBeginIndex = i;
        }
        if(sum > res.max) {
            res.max = sum;
            res.endIndex = i;
            res.benginIndex = newBeginIndex;
        } 
    }
    return res
};
