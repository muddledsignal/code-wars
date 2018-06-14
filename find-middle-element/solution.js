function gimme(inputArray) {
    let maxIndex = Math.max(...inputArray);
    let minIndex = Math.min(...inputArray);

    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] !== maxIndex && inputArray[i] !== minIndex) {
        return i;
      }
    }
   };