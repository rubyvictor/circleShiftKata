class Rotate {
  constructor(...word) {
    this.word = word;
  }

  rotate(word, x) {
    let wordArr;
    if (word.includes(" ")) {
      wordArr = word.split(" ");
      return wordArr
        .slice(x)
        .concat(" ")
        .concat(wordArr.slice(0, x))
        .join("");
    } else {
      wordArr = word.split("");
      return wordArr
        .slice(x)
        .concat(wordArr.slice(0, x))
        .join("");
    }
  }
}

module.exports = Rotate;
