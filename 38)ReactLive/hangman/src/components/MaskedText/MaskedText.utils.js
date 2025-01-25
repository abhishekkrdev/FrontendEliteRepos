export function getMaskedString(originalWord, guessedLetters) {
    guessedLetters = guessedLetters.map((letter) => letter.toUpperCase());
    const guessedLetterSet = new Set(guessedLetters);
    return originalWord
        .toUpperCase()
        .split("")
        .map((char) => {
            if (guessedLetterSet.has(char)) {
                return char;
            } else {
                return "_";
            }
        });
}
