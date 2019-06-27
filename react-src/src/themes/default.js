import React from "react";

// Defines colors
const white = "white";
const black = "black";
const gray = "#666";
const lightgray = "lightgray";
const darkgray = "#333";

// Defines color schemes
const colorSchemes = {
  light: {
    text: black,
    background: white,
    gray: gray,
    placeholder: white,
    borderColor: black,
    cursor: "brutalist_line_SVGicon_cursor2.png",
    inactive: lightgray
  },
  dark: {
    text: white,
    background: black,
    gray: lightgray,
    placeholder: black,
    borderColor: white,
    cursor: "brutalist_line_SVGicon_cursor2-black.png",
    inactive: darkgray
  }
};

// Gets a color scheme
const getColorScheme = colorScheme =>
  colorScheme === "light" ? colorSchemes.light : colorSchemes.dark;

// Gets a theme with colors, fonts etc
// NOTE:  When changing font also the `WebFont.load` has to be updated
const getTheme = colorScheme => {
  return {
    colors: getColorScheme(colorScheme),
    fonts: {
      default: "'Major Mono Display', sans-serif;"
    }
  };
};

// Switches from a color scheme to another
// Useful when clicking the theme switcher button
const switchThemeFrom = colorScheme => {
  return colorScheme === "light"
    ? { colorScheme: "dark", theme: getTheme("dark") }
    : { colorScheme: "light", theme: getTheme("light") };
};

// Switches to a color scheme
const switchThemeTo = colorScheme => {
  return { colorScheme: colorScheme, theme: getTheme(colorScheme) };
};

// Creates a theme context
const ThemeContext = React.createContext(switchThemeTo("light"));

export { getTheme, switchThemeFrom, switchThemeTo, ThemeContext };
