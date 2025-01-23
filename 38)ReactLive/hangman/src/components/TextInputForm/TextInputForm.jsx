/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({
    inputType = "text",
    handleFormSubmit,
    handleTextInputChange,
    handleShowHideClick,
    value,
}) {
    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput
                    value={value}
                    type={inputType}
                    label="Enter a word or phrase"
                    placeholder="Enter a word or phrase here ..."
                    onChangeHandler={handleTextInputChange}
                />
            </div>
            <div>
                <Button
                    styleType="warning"
                    text={inputType === "text" ? "Hide" : "Show"}
                    onClickHandler={handleShowHideClick}
                    type="button"
                />
            </div>
            <div>
                <Button styleType="primary" text="Submit" type="submit" />
            </div>
        </form>
    );
}

export default TextInputForm;
