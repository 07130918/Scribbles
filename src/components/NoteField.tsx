import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import TextareaAutosize from "react-textarea-autosize";

const StyledTextareaAutoSize = styled(TextareaAutosize)`
    border-width: 1px;
    border-radius: 0.375rem;
    padding: 0.5rem;
    border-color: inherit;
    background-color: inherit;
    &:focus {
        border-color: var(--chakra-colors-blue-500);
        box-shadow: 0 0 0 1px var(--chakra-colors-blue-500);
    }
`;

/**
 * A type of component that is a text area that is displayed in Notepad
 * @property text - The text in the text area
 * @property onChange - A function that is called when the text in the text area changes
 */
type NoteFieldProps = {
	text: string;
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const NoteField = ({ text, onChange }: NoteFieldProps) => {
	return (
		<Box w="400px">
			<StyledTextareaAutoSize
				value={text}
				placeholder="Enter memo here"
				minRows={10}
				onChange={onChange}
			/>
		</Box>
	);
};

export default NoteField;
