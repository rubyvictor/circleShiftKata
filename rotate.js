class Rotate {
  constructor(...data) {
    this.data = data;
  }

  rotate(data, steps) {
    let arr;
    if (data.includes(" ")) {
      arr = data.split(" ");
      let rotations = steps % arr.length;
      if (rotations === 0) {
        return arr
          .slice(rotations, 1)
          .concat(" ")
          .concat(arr.slice(-1))
          .join("");
      }
      return arr
        .slice(rotations)
        .concat(" ")
        .concat(arr.slice(0, rotations))
        .join("");
    } else {
      arr = data.split("");
      return arr
        .slice(steps)
        .concat(arr.slice(0, steps))
        .join("");
    }

    if (data.length < 2) {
      return data;
    }
  }
}

module.exports = Rotate;
