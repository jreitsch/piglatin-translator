$(document).ready(function () { 
    function translateWord() {
        var word = document.getElementById('word').value;
        var cons = []; // to gather the leading consonants
        word = word.toLowerCase();
        var response = "The word <i>" + word + "</i> translated into pig latin, looks like this:  ";

        for (i = 0; i < word.length; i += 1) {
            
          // Iterate through letters. Add consonants to the cons variable. Stop on first vowel. Challenge text includes 'y' in vowels.
            
            if (word[i] !== "a" && word[i] !== "e" && word[i] !== "i" && word[i] !== "o" && word[i] !== "u" && word[i] !== "y") {
                cons += word[i];
            } else {
                if (i === 0) {
                  // From challange text - "If the word starts with a vowel, just append 'way' to the end of the word."
                    response += word + "way";
                } else {
                  // From challenge text - "Move all consonants leading up to the first vowel to the end of the word and add an 'ay' at the very end."
                    word = word.slice(i);
                    response += "<b>" + word + cons + "ay</b>";
                }
                console.log(response);
                document.write(response);
            }

        }
    }
}); // end ready
