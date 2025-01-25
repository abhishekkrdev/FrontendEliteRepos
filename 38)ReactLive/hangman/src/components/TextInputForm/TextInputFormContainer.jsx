import { useEffect, useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {
    const navigate = useNavigate();

    const [inputType, setInputType] = useState("text");
    const [value, setValue] = useState("");

    useEffect(()=>{
        console.log('Component loaded')
    })

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
        <TextInputForm
            value={value}
            inputType={inputType}
            handleFormSubmit={handleFormSubmitHandler}
            handleTextInputChange={handleTextInputChangeHandler}
            handleShowHideClick={handleShowHideClick}
        />
    );
}

export default TextInputFormContainer;
