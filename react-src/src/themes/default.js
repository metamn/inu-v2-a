import React from "react";
import { modularScale } from "polished";

/**
 * Color definitions
 */
const white = "white";
const black = "black";
const gray = "#666";
const lightgray = "lightgray";
const darkgray = "#333";

/**
 * Color schemes
 */
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

/**
 * Text styles
 * @type {Object}
 */
const textStyles = {
  default: {
    fontSize: "100%",
    lineHeight: "1.25",
    lem: "1.25em"
  },
  large: {
    fontSize: modularScale(1)
  }
};

/**
 * Fonts
 * NOTE:  When changing font also the `WebFont.load` has to be updated
 *
 * @type {Object}
 */
const fonts = {
  default: "'Major Mono Display', sans-serif;"
};

/**
 * Returns a color scheme
 *
 * @param  String colorScheme The name of the color scheme
 * @return Object             The color scheme
 */
const getColorScheme = colorScheme =>
  colorScheme === "light" ? colorSchemes.light : colorSchemes.dark;

/**
 * Returns a complete theme with colors, fonts etc
 *
 * @param  String colorScheme The name of the color scheme
 * @return Object             The theme
 */
const getTheme = colorScheme => {
  return {
    colors: getColorScheme(colorScheme),
    fonts: fonts,
    textStyles: textStyles
  };
};

/**
 * Switches from a color scheme to another
 * Useful when clicking the theme switcher button
 *
 * @param  String colorScheme The name of the color scheme from switch
 * @return Object             The theme and the color scheme name
 */
const switchThemeFrom = colorScheme => {
  return colorScheme === "light"
    ? { colorScheme: "dark", theme: getTheme("dark") }
    : { colorScheme: "light", theme: getTheme("light") };
};

/**
 * Switches to a color scheme
 *
 * @param  String colorScheme The name of the color scheme to switch
 * @return Object             The theme and the color scheme name
 */
const switchThemeTo = colorScheme => {
  return { colorScheme: colorScheme, theme: getTheme(colorScheme) };
};

/**
 * Creates a theme context
 * @type {[type]}
 */
const ThemeContext = React.createContext(switchThemeTo("light"));

export { getTheme, switchThemeFrom, switchThemeTo, ThemeContext };
