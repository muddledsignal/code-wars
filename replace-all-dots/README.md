https://www.codewars.com/kata/fixme-replace-all-dots

#The code provided is supposed replace all the dots . in the specified String str with dashes -

#But it's not working properly.

#Task
Fix the bug so we can all go home early.

###Notes
String str will never be null.

----------------------------------------------

I messed around a bit with the code that was already there to see what would happen, changing the dot to have quotes, little things like that. Then I looked up 'replace' on mdn and read about /g (which makes it global), then I googled 'replace javascript' and took a look at w3schools, didn't find what I needed, then I googled my exact problem 'javascript change period to hyphen' and found that I had to escape the dot in addition to using /g.