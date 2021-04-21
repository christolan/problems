const insert = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i];

    for (let j = i; j > 0; j--) {
      if (cur < arr[j - 1]) {
        arr[j] = arr[j - 1];
      } else {
        arr[j] = cur;
        break;
      }
    }
  }
  return arr;
};

// const a = [1, 7, 3, 3, 4, 6, 8, 3, 2, 78, 9, 3, 23, 7, 34];
// console.log(insert(a));
