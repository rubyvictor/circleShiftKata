const rotate = require("./rotate");

describe("it should shift the front to the end", () => {
  it('"w" in word should go to the back "ordw"', () => {
    const newRotate = new rotate();

    expect(rotate("word")).toEqual("ordw");
  });
});
