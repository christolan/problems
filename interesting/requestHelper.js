const requestHelper = async (req, repeat) => {
  try {
    const res = await req();
    return res;
  } catch (e) {
    console.log(repeat);

    if (!repeat) {
      console.log("error");
      return;
    }

    return requestHelper(req, --repeat);
  }
};

let a = 5;

requestHelper(async () => {
  if (a) {
    a--;
    throw new Error();
  }

  console.log("hello world");
}, 4);
