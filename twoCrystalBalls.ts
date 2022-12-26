export const twoCrystalBalls = (arr) => {
  const jump = Math.floor(Math.sqrt(arr.length));
  let i = jump;
  for (; i <= arr.length; i += jump) {
    if (arr[i]) {
      break;
    }
  }
  i -= jump;
  for (let j = i; j < jump + i; j++) {
    if (arr[j]) {
      return j;
    }
  }
  return -1;
};
