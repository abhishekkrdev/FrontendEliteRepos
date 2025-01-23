/* eslint-disable react/prop-types */
// import "./Button.css";

import { getButtonStyling } from "./Button.utils";

function Button(props) {
    const {
        text,
        onClickHandler,
        styleType = "primary",
        type = "button",
    } = props;

    return (
        <button
            onClick={onClickHandler}
            // style={{ background: "red", color: "white" }}
            // className="btn"
            className={`px-4 py-2 ${getButtonStyling(
                styleType
            )} bg-blue-500 text-white`}
            type={type}
        >
            {text}
        </button>
    );
}

export default Button;
