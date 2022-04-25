import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      ":root": {
        fontSize: "62.5%",
      },
      "*": {
        boxSizing: "border-box",
      },
    },
  },
  fontSizes: {
    200: "clamp(1rem, 2vw, 3rem)",
    400: "clamp(2rem, 3vw, 4rem)",
    600: "clamp(3rem, 4vw, 5rem)",
    800: "clamp(4rem, 5vw, 6rem)",
  },
});

export default theme;
