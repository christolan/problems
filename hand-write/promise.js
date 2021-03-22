const a = (cb) => {
  setTimeout(() => {
    cb("hello");
  }, 1000);
};

const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

class myPromise {
  constructor(fn) {
    this.status = PENDING;
    this.value = null;
    this.resolved = null;
    this.rejected = null;

    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = RESOLVED;
        this.value = value;
        this.resolved && this.resolved(value);
      }
    };

    const reject = (value) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.value = value;
        this.rejected && this.rejected(value);
      }
    };

    try {
      fn(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then = (cb1, cb2) => {
    if (this.status === PENDING) {
      this.resolved = cb1;
      this.rejected = cb2;
    } else if (this.status === RESOLVED) {
      cb1(this.value);
    } else if (this.status === REJECTED) {
      cb2(this.value);
    }
  };
}

const pa = new myPromise(a);

pa.then((res) => {
  console.log(res + " " + "world");
});
