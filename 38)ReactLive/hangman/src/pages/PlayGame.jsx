import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useContext, useState } from "react";
import HangMan from "../components/HangMan/HangMan";
import { WordContext } from "../context/WordContext";
import wordStore from "../stores/WordStore";

function PlayGame() {
    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"));

    // const { text } = useParams();
    // console.log(text);

    // const { word, wordList } = useContext(WordContext);
    const { word, wordList } = wordStore();

    const { state } = useLocation();
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);

    function handleLetterClick(letter) {
        if (state?.wordSelected.toUpperCase().includes(letter)) {
            console.log("correct");
        } else {
            setStep((prevState) => prevState + 1);
        }
        setGuessedLetters([...guessedLetters, letter]);
    }
    return (
        <>
            <h1>PlayGame</h1>

            {wordList.map((wordObject) => {
                return <li key={wordObject.id}>{wordObject.wordValue}</li>;
            })}

            {word && (
                <>
                    <MaskedText text={word} guessedLetters={guessedLetters} />
                    <div>
                        <LetterButtons
                            text={word}
                            guessedLetters={guessedLetters}
                            onLetterClick={handleLetterClick}
                        />
                    </div>
                </>
            )}

            <div>
                <HangMan step={step} />
            </div>
            <Link to="/" className="text-blue-400">
                Home
            </Link>
            <Link to="/start" className="text-blue-400">
                Start Game Link
            </Link>
        </>
    );
}

export default PlayGame;
