class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();
        const buckets = Array(nums.length + 1).fill().map(() => []);

        // Count frequency
        for (let num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        // Put numbers into buckets
        for (let [num, freq] of freqMap.entries()) {
            buckets[freq].push(num);
        }

        // Collect top k
        const result = [];
        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            for (let num of buckets[i]) {
                result.push(num);
                if (result.length === k) break;
            }
        }

        return result;
    }
}
