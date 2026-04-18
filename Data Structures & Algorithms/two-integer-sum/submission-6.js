class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let indArr = []
        for (let  i = 0; i <= nums.length; i++){
            for (let  j = i; j <= nums.length; j++){
                if (i != j && nums[i]+nums[j] === target){
                    indArr.push(i);
                    indArr.push(j);
                    break;
                }
            }
        }
        return indArr;
    }
}
