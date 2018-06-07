'use strict';

function insertDash(num) {
    var numStringArray = [];
    var newNum = num.toString().split('');
  
    for (i = 0; i < newNum.length; i++) {
      if (newNum[i] % 2 === 1 && newNum[i + 1] % 2 === 1) {
        numStringArray += newNum[i] + '-';
      } else {
        numStringArray += newNum[i];
      }
    }
    
    return numStringArray;
  }