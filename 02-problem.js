//2. Write a function that takes a string, and returns the character that is most commonly used in the string

function find(string) {
    let charcount = {};
    let marchar = '';
    let maxcount = 0;
    for (i = 0; i < string.length; i++) {
        let char = string[i];
        if (charcount[char]) {
            charcount[char]++;
        } else {
            charcount[char] = 1;
        }
        if (charcount[char] > maxcount) {
            maxcount = charcount[char];
            marchar = char;
        }
    }
    return marchar;
}
console.log(find("nitittn"));

// output- t
              
