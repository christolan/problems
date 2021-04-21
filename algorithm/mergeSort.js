const { merArr } = require("./mergeArr");

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);

  return merArr(mergeSort(arr.slice(0, center)), mergeSort(arr.slice(center)));
};

// const a = [1, 7, 3, 3, 4, 6, 8, 3, 2, 78, 9, 3, 23, 7, 34];
// const b = mergeSort(a);
// debugger;

exports.mergeSort = mergeSort;
