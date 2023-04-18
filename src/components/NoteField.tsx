import { Box, Textarea } from "@chakra-ui/react";

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
        <>
            <Box>
                <Textarea
                    value={text}
                    placeholder="Enter memo here"
                    resize='none'
                    w='400px'
                    h='250px'
                    onChange={onChange}
                />
            </Box>
        </>
    );
};

export default NoteField;
