import { useState } from "react";
import "./App.css";

function Input({ type, placeholder }) {
    return ``
}

function App() {
    const [isStudent, setIsStudent] = useState(false);
    return (
        <>
            <form>
                <input type="text" placeholder="Enter your name" />
                <input
                    type="checkbox"
                    id="student"
                    name="student"
                    value={isStudent}
                    onChange={() => setIsStudent(!isStudent)}
                />
                <label htmlFor="student"> Are you a student?</label>
            </form>
        </>
    );
}

export default App;
