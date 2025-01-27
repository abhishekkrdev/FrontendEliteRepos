import Link from "react-router-dom";
import Button from "../components/Button/Button";
import { useContext, useEffect, useState } from "react";
import { WordContext } from "../context/WordContext";
import wordStore from "../stores/WordStore";

function Home() {
    const [word, setWord] = useState("");
    // const { setWordList } = useContext(WordContext);
    const { setWordList } = wordStore();

    useEffect(() => {
        async function fetchWords() {
            const response = await fetch("http://localhost:3000/words");
            const data = await response.json();
            console.log(data);
            setWordList([...data]);
            const randomIndex = Math.floor(Math.random() * data.length());
            setWord(data[randomIndex].wordValue);
        }
        fetchWords();
    }, [setWordList]);

    return (
        <>
            <Link to="/play" state={{ wordSelected: word }}>
                <Button text="Single Player Game" />
            </Link>
            <br />
            <Link to="/start">
                <div className="mt-4">
                    <Button text="Multi Player Game" styleType="secondary" />
                </div>
            </Link>
        </>
    );
}

export default Home;
