class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let a = nums.length;
        let hasDups = false;
        for (let i = 0; i < a; i++){
            for (let j = i + 1; j < a; j++){
                if ( nums[j] === nums[i]){
                    hasDups = true;
                }
            }
        }
        return hasDups;
    }
}
