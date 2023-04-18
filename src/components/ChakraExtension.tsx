import { Box, BoxProps, Flex, FlexProps } from "@chakra-ui/react";

export const BrowserExtension = (props: BoxProps) => (
    <Box w='420px' p='10px' {...props} />
);

export const NoteIndexButtonWrapper = (props: FlexProps) => (
    <Flex maxW='315px' overflowX="scroll" {...props} />
);
