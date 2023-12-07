// function solution(nums) {
//   const max = nums.length / 2;
//   const result = [...new Set(nums)];

//   return result.length > max ? max : result.length;
// }

    function solution(nums) {
        const max = nums.length / 2;
        let parseNums = [];

        for (let i = 0; i < nums.length; i++) {
            if (!parseNums.includes(nums[i])) {
                parseNums.push(nums[i]);
            }
        }

        return parseNums.length > max ? max : parseNums.length;
    }