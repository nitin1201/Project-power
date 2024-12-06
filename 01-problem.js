//ques-> write a function that accepts an array of  strings.Return the longest string.
const name = ["nitin", "aditya", "anirudh", "sagar"];
function longestString(arr) {
   string = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > string.length) {
      string = arr[i];
    }}
  return string;
}
console.log(longestString(name));

// output:- anirudh