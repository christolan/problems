function a(name) {
  this.name = name;
  this.age = 12;
}

console.log(new a("tom"));

function myNew() {
  const obj = {};
  const [cons, ...input] = [...arguments];
  cons.apply(obj, input);
  obj.__proto__ = cons.prototype;
  return obj;
}

const inst = myNew(a, "tom");

console.log(inst, inst instanceof a);
