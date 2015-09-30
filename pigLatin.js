var word = prompt("Enter a word to be translated");
var firstVowel = [];

for (i = 0; i < word.length; i += 1) {
    // I need to test for the first vowel. Incorporate an if statement into this for loop to determine what position the first vowel is in, then take one route if it's in position 0 and the other if it comes after position 0.
    
    if (word[i] !== "a" && word[i] !== "e" && word[i] !== "i" && word[i] !== "o" && word[i] !== "u") {
        // get each letter in the word, one at a time, and test for vowel. If it's consonant, iterate on.
        document.write("consonant " + word[i] + " at position " + i + "<br>");
    } else {
        // if it's vowel, stop. Return position of first vowel.
        document.write("vowel " + word[i] + " at position " + i + "<br>");
        firstVowel = [word[i], i];
        document.write(firstVowel);
        document.write("the first vowel is in position: " + firstVowel[1]);
        if (firstVowel[1] = 0) {
            document.write(word);
        }
        break;
        

    }
    
    // document.write(firstVowel);   //-- doesn't make it here.
}