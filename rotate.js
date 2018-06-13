const rotate = (word) => {
  const wordArr = word.split("");
  console.log(wordArr)
  const result = []
  wordArr.forEach(element => {
      result.push(wordArr.shift())
  });
//   for (let index = 0; index < wordArr.length; index++) {
//      result.push(wordArr.shift());      
//   }
  console.log(result)
  return result.join();
}

module.exports = rotate;
