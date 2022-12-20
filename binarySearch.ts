const arr = [1, 2, 3, 4];

export const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const middle = Math.floor((right - left) / 2 + left);
    if (arr[middle] === target) return true;
    if (arr[middle] < target) {
      right = middle - 1;
    } else {
      left = middle;
    }
  }
};
