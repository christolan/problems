const flatten = (arr) => {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res.push(...flatten(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }

  return res;
};

const a = flatten([[1, [2, 3], 4]]);
debugger;
