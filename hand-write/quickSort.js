const quickSort = (arr) => {
  if (arr.length <= 0) {
    return arr;
  }

  let center = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < center) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), center, ...quickSort(right)];
};

// const a = [1, 7, 3, 3, 4, 6, 8, 3, 2, 78, 9, 3, 23, 7, 34];
// const b = quickSort(a);
// debugger;
