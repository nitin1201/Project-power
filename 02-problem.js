function find(string) {
    let charCount = {};
    let marchar = '';
    let maxCount = 0;
    for (i = 0; i < string.length; i++) {
        let char = string[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            marchar = char;
        }
    }
    return marchar;
}
console.log(find("nitin"));
              