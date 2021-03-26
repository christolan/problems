const a = [1, 7, 3, 3, 4, 6, 8, 3, 2, 78, 9, 3, 23, 7, 34];

const bubble = (arr) => {
  for (let j = arr.length; j > 1; j--) {
    let flag = false;
    for (let i = 0; i < j - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        flag = true;
      }
    }
    if (!flag) {
      return arr; // 如果这次遍历没有发生互换，就表示数组已经拍好序了，就不需要后续的遍历了
    }
  }
  return arr;
};

console.log(bubble(a));
