function high(x) {

    x = x.split(" ");
    let [max, word] = [0, ""];
  
    for (let i = 0; i < x.length; i++) {
  
      let place = x[i].length ? x[i].split("").map(a => a.charCodeAt(0) - 96).reduce((a, b) => a + b) : x[i].charCodeAt(0)
  
      if (place > max)
        [word, max] = [x[i], place]
    }
    return word;
  }