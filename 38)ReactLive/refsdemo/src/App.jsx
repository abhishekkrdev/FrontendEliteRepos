/* eslint-disable react/prop-types */
// import { useState } from "react";

import { forwardRef, useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

// function Input({ type, placeholder, customInputRef }) {
//     return <input type={type} placeholder={placeholder} ref={customInputRef} />;
// }

const Input = forwardRef(function Input({ type, placeholder }, ref) {
    return <input type={type} placeholder={placeholder} ref={ref} />;
});

function App() {
    // const [focus, setFocus] = useState(false);
    const customRef = useRef(0);
    const [x, setX] = useState();
    let y = 0;

    const inputRef = useRef(null);
    const customInputRef = useRef(null);

    const handleClick = function () {
        // setFocus(!focus);
        // document.getElementById("email").focus();
        // customRef.current = 10;

        inputRef.current.focus();
    };

    useEffect(() => {
        console.log("useEffect", customRef.current, y);
    }, [x, y]);

    function handleMoreClick() {
        customInputRef.current.focus();
    }

    return (
        <>
            {/* <input type="email" autoFocus={focus} /> */}
            <input type="email" id="email" ref={inputRef} />
            <br />
            <Input
                type="text"
                placeholder={"Write Something"}
                customInputRef={customInputRef}
            />
            <br />
            <input type="password" />
            <br />
            <button onClick={handleMoreClick}>Click Custom Component</button>
            <button onClick={handleClick}>Click</button>
            <button onClick={() => setX(x + 1)}>Submit</button>
        </>
    );
}

export default App;
