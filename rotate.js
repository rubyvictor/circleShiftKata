class Rotate {
  constructor(...data) {
    this.data = data;
  }

  rotate(data, steps) {
    let arr;
    let n = steps % data.length;

    while (Array.isArray(data) === false) {
      if (data.includes(" ")) {
        arr = data.split(" ");
        let rotations = steps % arr.length;
        if (rotations === 0) {
          return arr.slice().join(" ");
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
      break;
    }

    if (data.length < 2) {
      return data;
    }

    if (n < 0) {
      return data.slice(n).concat(data.slice(0, data.length + n));
    } else {
      return data.slice(n).concat(data.slice(0, n));
    }
  }
}

module.exports = Rotate;
