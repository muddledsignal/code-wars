function mutateMyStrings(stringOne, stringTwo){

    let firstString = stringOne;
    stringArray = [];
  
    stringOne = stringOne.split('');
    stringTwo = stringTwo.split(''); 
  
  
    for (var i = 0; i < stringTwo.length; i++) {
      if (stringOne[i] !== stringTwo[i]) {
  
        stringOne[i] = stringTwo[i];
        stringArray.push(stringOne.join(''));
      }
    }
  
    let restOfString = stringArray.join('\n').concat('\n');
    
    return `${firstString}\n${restOfString}`;
  }