import { Route, Routes } from "react-router-dom";
import StartGame from "./pages/StartGame";
import PlayGame from "./pages/PlayGame";
import { WordContext } from "./context/WordContext.js";
import { useState } from "react";

function App() {
    const [wordList, setWordList] = useState([]);
    return (
        <WordContext.Provider value={{ wordList, setWordList }}>
            <Routes>
                <Route path="/start" element={<StartGame />} />
                <Route path="/play" element={<PlayGame />} />
                <Route path="/" element={<PlayGame />} />
            </Routes>
        </WordContext.Provider>
    );
}

export default App;
