import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        mainBg: '#f7f7f7',
    },
    breakpoints: {
        xs: "320px",
        sm: "600px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
    },
    textStyles: {
        h1: {
            fontSize: "27px",
            fontWeight: "700"
        },
        h2: {
            fontSize: "22px",
            fontWeight: "400"
        },
        title: {
            fontSize: "18px",
            fontWeight: "700"
        }
    }
})

export default theme
