import { extendTheme, theme } from "@chakra-ui/react";

const colors = {
  "main-bg": "#172B4D",

  "white-text": "#E8E8EA",
  "subtle-text": "#9B9B9B",

  "column-bg": "#293c5a",
  "column-header-bg": "#364b72",

  "card-bg": "#172B4D",
  "card-border": "#2D313E"
};

const fonts = {
  heading: "Poppins",
  body: "Poppins",
};

export default extendTheme({
  ...theme,
  colors,
  fonts,
});
