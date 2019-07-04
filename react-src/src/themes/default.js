import React from "react";
import { modularScale, getContrast, meetsContrastGuidelines } from "polished";

/**
 * Color definitions
 */
const colors = {
  white: "white",
  black: "black",
  gray: "#666",
  lightgray: "lightgray",
  darkgray: "#333"
};

/**
 * Color schemes
 */
const colorSchemes = {
  light: {
    text: colors.black,
    background: colors.white,
    gray: colors.gray,
    placeholder: colors.white,
    borderColor: colors.black,
    inactive: colors.lightgray
  },
  dark: {
    text: colors.white,
    background: colors.black,
    gray: colors.lightgray,
    placeholder: colors.black,
    borderColor: colors.white,
    inactive: colors.darkgray
  }
};

/**
 * Color pairs
 * Colors come in pairs. And with an accessible contrast ratio.
 * We don't set a single color, we always set a pair of colors, one for the background, the other for the text, and make sure when they are paired their color contrast ratio is checked first
 *
 * @param  Object colors A set of colors of a color scheme
 * @return Object        A set of color pairs
 */
const getColorPairs = colors => {
  const { text, background } = colors;

  return {
    default: {
      color: text,
      backgroundColor: background,
      contrast: getContrast(text, background),
      meetsContrast: meetsContrastGuidelines(text, background)
    },
    inverted: {
      color: background,
      backgroundColor: text,
      contrast: getContrast(text, background),
      meetsContrast: meetsContrastGuidelines(text, background)
    }
  };
};

/**
 * Text styles
 */
const textStyles = {
  // Grid is set up elsewhere manually since createGlobalStyle supports only tagged liters
  default: {
    fontSize: "100%"
  },
  large: {
    fontSize: modularScale(1)
  }
};

/**
 * Link styles
 */
const links = {
  default: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "line-through"
    }
  }
};

/**
 * Fonts
 *
 * NOTE:  When changing font also the `WebFont.load` has to be updated
 */
const fonts = {
  default: {
    fontFamily: "'Major Mono Display', sans-serif;"
  }
};

/**
 * Icons
 */
const icons = {
  light: {
    brutalistCursor2: "brutalist_line_SVGicon_cursor2.png"
  },
  dark: {
    brutalistCursor2: "brutalist_line_SVGicon_cursor2-black.png"
  }
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
  const colors = getColorScheme(colorScheme);

  return {
    colors: colors,
    colorPairs: getColorPairs(colors),
    fonts: fonts,
    textStyles: textStyles,
    links: links,
    icons: icons[colorScheme]
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
 */
const ThemeContext = React.createContext(switchThemeTo("light"));

/**
 * Exports default data
 */
export { getTheme, switchThemeFrom, switchThemeTo, ThemeContext };

/**
 * Exports original values for the styleguide
 */
export { colors as sgColors };
