https://www.codewars.com/kata/abbreviate-a-two-word-name/

#Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

#The output should be two capital letters with a dot seperating them.

##It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

-------------------------------------------------------
Paul Suarez and I (Suzanne Leber) worked on this together. We did a bunch of googling and looking up different methods, and we almost ended up making our answer too complicated. We decided to split the names apart by the space between them, accessed the indexes of the first letters with bracket notation, used template literals to concatenate our new string of initials, and changed the characters to uppercase. 