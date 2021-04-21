const a = [1, 7, 3, 3, 4, 6, 8, 3, 2, 78, 9, 3, 23, 7, 34];

const select = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
};

console.log(select(a));
