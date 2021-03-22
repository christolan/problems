Function.prototype.myBind = function () {
  const [ctx, ...input] = [...arguments];
  const fn = this;
  return function () {
    return fn.call(ctx, ...input, ...arguments);
  };
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

const newA = a.myBind(b, "tom");

console.log(newA(12));
