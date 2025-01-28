import { useState } from "react";
import Modal from "./Modal";

export default function ButtonWithModal() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            <div>Something done here</div>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </>
    );
}
