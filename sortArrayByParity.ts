// twp pointer solution
export let sortArrayByParity = (nums) => {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    if (!(nums[i] % 2 === 0)) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    if (nums[i] % 2 === 0) i++;
    if (nums[j] % 2 === 1) j--;
  }
  return nums;
};

export let sortArrayByParity2 = (nums) =>
  nums.sort((a, b) => (a % 2 === 0 ? -1 : 0));
