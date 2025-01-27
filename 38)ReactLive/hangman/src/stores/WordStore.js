import { create } from "zustand";

// create function creates a store for us

const wordStore = create((set) => {
    return {
        wordList: [],
        word: "",
        setWordList: (list) => {
            set((state) => {
                return {
                    ...state,
                    wordList: list,
                };
            });
        },
        setWord: (newWord) => {
            set((state) => ({
                ...state,
                word: newWord,
            }));
        },
    };
});

export default wordStore;
