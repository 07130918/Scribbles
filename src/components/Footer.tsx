import { ChatIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Link } from '@chakra-ui/react';
import { GIT_HUB_LINK, TO_DO_EXTENSION_LINK, VOCABULARY_QUIZ_LINK } from '../consts';

const Footer = () => {
    const externalLinkIcon = <ExternalLinkIcon mx='4px' />;

    return (
        <>
            <Box mt={2} mb={1}>
                {
                    [
                        {
                            link: GIT_HUB_LINK,
                            text: 'Gimme your feedback!',
                            icon: <ChatIcon mr='4px' />
                        },
                        {
                            link: TO_DO_EXTENSION_LINK,
                            text: 'Get the simple To-Do list Chrome extension',
                            icon: externalLinkIcon
                        },
                        {
                            link: VOCABULARY_QUIZ_LINK,
                            text: 'Take the English vocabulary quiz',
                            icon: externalLinkIcon
                        }
                    ].map(({ link, text, icon }) => {
                        return (
                            <Box key={link}>
                                {link === GIT_HUB_LINK ? (
                                    <Link href={link} isExternal color="#4299E1">
                                        {icon}{text}
                                    </Link>
                                ) : (
                                    <Link href={link} isExternal color="#4299E1">
                                        {text}{icon}
                                    </Link>
                                )}
                            </Box>
                        );
                    })
                }
            </Box>
        </>
    );
};

export default Footer;
