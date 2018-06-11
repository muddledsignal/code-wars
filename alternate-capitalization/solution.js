function capitalize(s) {
    let evenString = '';
    let oddString = '';
  
    for (var i = 0; i < s.length -1; i += 2) {
      evenString += s[i].toUpperCase() + s[i+1];
      console.log(evenString);
      console.log([i]);
    }
    for (var j = 0; j < s.length -1; j += 2) {
      oddString += s[j] + s[j+1].toUpperCase();
      console.log(oddString);
      console.log([j]);
    } 
    if (s.length % 2) {
      evenString += s[s.length -1].toUpperCase();
      oddString += s[s.length -1];
    }
    return [evenString, oddString];
  }