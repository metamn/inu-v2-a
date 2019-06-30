import { useState, useContext } from "react";
import { useLocalStorage, usePrefersDarkMode } from "./index";
import {
  ThemeContext,
  switchThemeTo,
  switchThemeFrom
} from "../themes/default.js";

/**
 * The theme hook
 *
 * - Sets the default theme from browser preferences and/or user preferences
 * - Saves theme into a state and makes is switchable
 *
 * @return array The theme object, the theme switcher function and the theme context
 */
const useTheme = () => {
  /** Checks if the user / browser prefers dark mode */
  const prefersDarkMode = usePrefersDarkMode();

  /** Checks if the browser has stored a preference for a theme */
  const [currentThemeSaved, setCurrentThemeSaved] = useLocalStorage(
    "current-theme"
  );

  /** Sets the theme based on the above preferences */
  const starterColorScheme =
    typeof currentThemeSaved !== "undefined"
      ? currentThemeSaved
      : prefersDarkMode
      ? "dark"
      : "light";

  let themeContext = useContext(ThemeContext);
  themeContext = switchThemeTo(starterColorScheme);

  /** Saves theme into a state */
  const [currentTheme, setCurrentTheme] = useState(themeContext);

  /**
   * Swicth theme
   * @return {[type]} [description]
   */
  const switchTheme = () => {
    const newTheme = switchThemeFrom(currentTheme.colorScheme);
    setCurrentTheme(newTheme);
  };

  return [currentTheme.theme, switchTheme, ThemeContext];
};

export default useTheme;
