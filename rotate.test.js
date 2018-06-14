const rotate = require("./rotate");
const testRotate = new rotate();

describe("it should shift the first character in the word supplied", () => {
  it('"w" in word should go to the back "ordw"', () => {
    const rotated = testRotate.rotate("word",2);

    expect(rotated).toEqual("rdwo");
  });

  it('the first word in the string should shift to the second', () => {
      const rotated = testRotate.rotate("hello there",1);
      expect(rotated).toEqual("there hello")
  });

  it('the string should rotate multiple times', () => {
    const rotated = testRotate.rotate("hello there", 2);
    expect(rotated).toEqual("hello there")
  });

  it('the words in the array should shift to the left by 2 steps', () => {
    const rotated = testRotate.rotate(["hello","there","victor"], -2);
    expect(rotated).toEqual(["there", "victor", "hello"])
  });
});
