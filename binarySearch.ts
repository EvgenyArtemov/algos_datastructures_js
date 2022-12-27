export const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const middle = Math.floor((right - left) / 2 + left);
    if (arr[middle] === target) return true;
    if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return false;
};
