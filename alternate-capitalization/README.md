https://www.codewars.com/kata/alternate-capitalization/javascript

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

I created two variables to hold the new strings, then I created two for loops; one for the string with even indexes capitalized and one for the odd indexes. Then I had to add an if statement to check whether the string length is odd or even.