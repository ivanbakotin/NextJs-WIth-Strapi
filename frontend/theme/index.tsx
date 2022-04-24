import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Montserrat",
    body: "Inter",
  },
  fontSizes: {
    100: "clamp(1rem, 2vw, 5rem)",
  },
});

export default theme;
