const a = {
  name: "a",
  show: () => {
    console.log(this.name);
  },
};

const b = {
  name: "b",
  show: function () {
    console.log(this.name);
  },
};

name = "window";

function add(a, b) {
  console.log(a + b);
}

a.show();
b.show();
add.apply(null, [1, 2]);
add.call(null, 1, 2);
