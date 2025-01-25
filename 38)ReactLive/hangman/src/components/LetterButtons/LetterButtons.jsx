const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

function LetterButtons({ text, guessedLetters, onLetterClick }) {
    const originalLetters = new Set(text.toUpperCase().split(""));
    const guessedLettersSet = new Set(guessedLetters);

    const buttonStyle = function (letter) {
        if (guessedLettersSet.has(letter)) {
            return `${
                originalLetters.has(letter) ? "bg-green-500" : "bg-red-500"
            }`;
        }
        return "bg-blue-500";
    };

    const buttons = ALPHABETS.map((letter) => {
        return (
            <button
                key={`button-${letter}`}
                onClick={() => onLetterClick(letter)}
                disabled={guessedLettersSet.has(letter)}
                className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(
                    letter
                )}`}
            >
                {letter}
            </button>
        );
    });

    return buttons;
}

export default LetterButtons;
