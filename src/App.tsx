import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { BrowserExtension } from "./components/ChakraExtension";
import Footer from "./components/Footer";
import NoteButtons from "./components/NoteButtons";
import NoteField from "./components/NoteField";
import { NOTE_MIN_COUNT } from "./consts";

/**
 * A type of component that is the main component of the application
 * @property id - A unique identifier for each notepad
 * @property content - The content of the notepad
 */
export type Note = {
    id: string;
    content: string;
};

const App = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [activeNoteIndex, setActiveNoteIndex] = useState(0);

    // load notes from local chrome storage
    useEffect(() => {
        chrome.storage.local.get("notes", ({ notes }) => {
            if (notes) {
                setNotes(notes);
            } else {
                for (let i = 0; i < NOTE_MIN_COUNT; i++) {
                    setNotes((prevNotes) => [...prevNotes, { id: uuidv4(), content: "" }]);
                }
            }
        });
    }, []);

    // save notes to local chrome storage
    useEffect(() => {
        chrome.storage.local.set({ notes });
    }, [notes]);

    // When a notepad is added, activate the last notepad
    const handleAddNote = () => {
        setNotes([...notes, { id: uuidv4(), content: "" }]);
        setActiveNoteIndex(notes.length);
    };

    const handleRemoveNote = () => {
        if (notes.length <= NOTE_MIN_COUNT) return;

        const newNotes = [...notes];
        newNotes.splice(activeNoteIndex, 1);
        setNotes(newNotes);
        setActiveNoteIndex(Math.min(activeNoteIndex, newNotes.length - 1));
    };

    const handleNoteContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        const newNotes = [...notes];
        newNotes[activeNoteIndex].content = value;
        setNotes(newNotes);
    };

    return (
        <>
            <BrowserExtension>
                <NoteButtons
                    notes={notes}
                    activeNoteIndex={activeNoteIndex}
                    setActiveNoteIndex={setActiveNoteIndex}
                    handleAddNote={handleAddNote}
                    handleRemoveNote={handleRemoveNote}
                />
                <NoteField
                    text={notes[activeNoteIndex]?.content || ""}
                    onChange={handleNoteContentChange}
                />
                <Footer />
            </BrowserExtension>
        </>
    );
}

export default App;
