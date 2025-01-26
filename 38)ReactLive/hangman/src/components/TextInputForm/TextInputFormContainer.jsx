import { useEffect, useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {
    const navigate = useNavigate();

    const [inputType, setInputType] = useState("text");
    const [value, setValue] = useState("");

    useEffect(() => {
        console.log("Component first load"); // not call on update
    }, []); // passing empty dependency array

    useEffect(() => {
        console.log("Component first load and update");
    }); // not passing depend

    useEffect(() => {
        console.log("Component First Load and update value changed");
    }, [value]);

    useEffect(() => {
        console.log("Component First Load and inputType value changed");
    }, [inputType]);

    function handleFormSubmitHandler(e) {
        e.preventDefault();
        console.log("Form Submitted");
        if (value) {
            // if we have something in value then we want to go to the play page
            // navigate(`/play?text=${value}`);
            navigate(`/play`, { state: { wordSelected: value } });
        }
    }

    function handleTextInputChangeHandler(event) {
        console.log("Text Input Change");
        setValue(event.target.value);
    }

    function handleShowHideClick(e) {
        e.stopPropagation();
        setInputType((prevState) => {
            return prevState === "text" ? "password" : "text";
        });
        console.log("Show/Hide button clicked");
    }

    return (
        <>
            <TextInputForm
                value={value}
                inputType={inputType}
                handleFormSubmit={handleFormSubmitHandler}
                handleTextInputChange={handleTextInputChangeHandler}
                handleShowHideClick={handleShowHideClick}
            />
            {inputType === "password" ? <Temp /> : null}
        </>
    );
}
function Temp() {
    useEffect(() => {
        console.log("Temp Component First Load");
        return () => {
            console.log("Temp component unmounted");
        };
    }, []);
}
export default TextInputFormContainer;
