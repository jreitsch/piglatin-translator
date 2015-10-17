var word = prompt("Enter a word to be translated");
var cons = []; // to gather the leading consonants
word = word.toLowerCase();
document.write("The word <i>" + word + "</i> translated into pig latin, looks like this:  ");

for (i = 0; i < word.length; i += 1) {
    // Determine what position the first vowel is in, then take one route if it's in position 0 and the other if it comes after position 0.
    
    if (word[i] !== "a" && word[i] !== "e" && word[i] !== "i" && word[i] !== "o" && word[i] !== "u" && word[i] !== "y") {
        // get each letter in the word, one at a time, and test for vowel. If it's a consonant, add it to the cons variable and iterate on.
        cons += word[i];
    } else {
        // if it's a vowel, stop. Return position of first vowel.
        if (i === 0) {
            // If the word starts with a vowel, just append "way" to the end of the word.
            document.write(word + "way");
        } else {
            // Move all consonants leading up to the first vowel to the end of the word and add an "ay" at the very end.
            word = word.slice(i);
            document.write("<b>" + word + cons + "ay</b>");
        }
        
        break;
    }

}
