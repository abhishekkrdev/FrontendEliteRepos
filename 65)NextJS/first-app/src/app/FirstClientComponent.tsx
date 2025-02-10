"use client";

export default function FirstClientComponent() {
    return (
        <h1
            onClick={() => {
                console.log("clicked");
            }}
        >
            I am a client component
        </h1>
    );
}
