/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let memo = {}
    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        let expect = target - num
        if(memo[expect] !== undefined){
            return [ memo[expect], i]
        }else{
            memo[num] = i
        }
    }
};