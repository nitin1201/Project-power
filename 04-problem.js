// 04. Given a string, write a function that will return whether or not that string is a palindrome.
// Palindrome:-  A palindrome is a word, sentence, verse, or even number that reads the same backward or forward.
// example: Nitin
function palindrome(str2){
    let a=str2.split("").reverse().toString()
    console.log(a);
    console.log(str2);
    if(a ==str2.split("") )
        return true
    return false
}
console.log(palindrome("wow"));

// output-ture