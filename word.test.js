const rotate = require("./rotate");
const testRotate = new rotate();

describe("it should shift the first character in the word supplied", () => {
  it('"w" in word should go to the back "ordw"', () => {
    const rotated = testRotate.rotate("word",1);

    expect(rotated).toEqual("ordw");
  });

  it('the first word in the string should shift to the second', () => {
      const rotateOnce = testRotate.rotate("hello there",1);
      expect(rotateOnce).toEqual("there hello")
  });
});
