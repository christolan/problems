/**
 * 自定义转换为原始类型的行为
 */
const a = {
  //   toString: () => {
  //     return "wo shi a";
  //   },
  [Symbol.toPrimitive]: () => {
    return 10123;
  },
};

console.log(String(a));
