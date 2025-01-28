/* eslint-disable react/prop-types */
import { useState } from "react";

export default function RefactorComponent({ children }) {
    const [x, setX] = useState(0);

    return (
        <>
            <button onClick={(x) => setX(x + 1)}>{x}</button>
            {children}
        </>
    );
}
