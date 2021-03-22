Function.prototype.myCall = function () {
  const [ctx, ...input] = [...arguments];
  ctx.__fn = this;
  const res = ctx.__fn(...input);
  delete ctx.__fn;
  return res;
};

Function.prototype.myApply = function () {
  const [ctx, input] = [...arguments];
  ctx.__fn = this;
  const res = ctx.__fn(...input);
  delete ctx.__fn;
  return res;
};

const a = function (name, age) {
  return {
    id: this.id,
    name,
    age,
  };
};

const b = {
  id: "hello",
};

console.log("myCall", a.myCall(b, "tom", 12));
console.log("myApply", a.myApply(b, ["tom", 12]));
