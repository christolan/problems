// 合并有序数组
const merArr = (arr1, arr2) => {
  let res = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      res.push(arr1.shift());
    } else {
      res.push(arr2.shift());
    }
  }

  if (arr1.length) {
    res = res.concat(arr1);
  } else {
    res = res.concat(arr2);
  }

  return res;
};

// const a = [1, 2, 5, 7, 8, 9];
// const b = [0, 3, 4, 6];
// const c = merArr(a, b);
// debugger;

exports.merArr = merArr;
