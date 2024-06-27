import { Button, Flex } from "@chakra-ui/react";

import type { Note } from "../App";
import { NOTE_MIN_COUNT } from "../consts";
import { NoteIndexButtonWrapper } from "./ChakraExtension";

/**
 * A type of component that is a collection of buttons that are displayed in Notepad
 * @property notes - A collection of notepads
 * @property activeNoteIndex - The index of the currently active notepad
 * @property setActiveNoteIndex - A function that sets the index of the currently active notepad
 * @property handleAddNote - A function that adds a notepad
 * @property handleRemoveNote - A function that removes a notepad
 */
type NoteButtonsProps = {
	notes: Note[];
	activeNoteIndex: number;
	setActiveNoteIndex: (index: number) => void;
	handleAddNote: () => void;
	handleRemoveNote: () => void;
};

const NoteButtons = ({
	notes,
	activeNoteIndex,
	setActiveNoteIndex,
	handleAddNote,
	handleRemoveNote,
}: NoteButtonsProps) => {
	return (
		<Flex mb={2}>
			<NoteIndexButtonWrapper>
				{[...Array(notes.length).keys()].map((index) => {
					return (
						<Button
							key={index}
							colorScheme="whatsapp"
							variant={index === activeNoteIndex ? "solid" : "outline"}
							mr={1}
							size="sm"
							onClick={() => setActiveNoteIndex(index)}
						>
							{index + 1}
						</Button>
					);
				})}
			</NoteIndexButtonWrapper>
			<Button
				colorScheme="pink"
				variant="solid"
				size="sm"
				ml="auto"
				mr={1}
				onClick={handleAddNote}
			>
				+
			</Button>
			<Button
				colorScheme="blue"
				variant={notes.length <= NOTE_MIN_COUNT ? "outline" : "solid"}
				size="sm"
				disabled={notes.length <= NOTE_MIN_COUNT}
				onClick={handleRemoveNote}
			>
				-
			</Button>
		</Flex>
	);
};

export default NoteButtons;
