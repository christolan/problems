Promise.resolve()
  .then(() => {
    console.log("promise1");
  })
  .then(() => {
    console.log("promise2");
  });

process.nextTick(() => {
  console.log("ticket");
});

setImmediate(() => {
  console.log("setImmediate");
});

console.log("end");
