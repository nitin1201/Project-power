// Q.03 Create a function that takes in two strings as two parameters and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.
// Comparing the length: if they are not same length, they are not an anagram of the other
// Sorting the string and using an equality operator to see if it’s equal.

function anagram(str1, str2) {
  let a = str1.length;
  let b = str2.length;
  if (a != b)
    return false;
  let ab=str1.split("").sort();
  let ac=str2.split("").sort();
  
  for (let i = 0; i <= b; i++) 
    if (ab[i] != ac[i]) 
        return false;

  return true;
}
console.log(anagram ("world","dlrox"));
