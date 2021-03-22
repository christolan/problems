const a = {
  //   toString: () => {
  //     return "wo shi a";
  //   },
  [Symbol.toPrimitive]: () => {
    return 10123;
  },
};

console.log(String(a));
