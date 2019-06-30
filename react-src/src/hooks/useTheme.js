import { useState, useContext } from "react";
import { useLocalStorage, usePrefersDarkMode } from "./index";
import { ThemeContext, switchThemeTo } from "../themes/default.js";

/**
 * Theming
 *
 * - Checks if the user / browser prefers dark mode
 * - Checks if the browser has stored a preference for a theme
 * - Based on above the theme context can be set up with the desired theme
 * - Then saved into a state var to make it switchable
 */

const useTheme = props => {
  const prefersDarkMode = usePrefersDarkMode();

  const [currentThemeSaved, setCurrentThemeSaved] = useLocalStorage(
    "current-theme"
  );

  const starterColorScheme =
    typeof currentThemeSaved !== "undefined"
      ? currentThemeSaved
      : prefersDarkMode
      ? "dark"
      : "light";

  let themeContext = useContext(ThemeContext);
  themeContext = switchThemeTo(starterColorScheme);

  const [currentTheme, setCurrentTheme] = useState(themeContext);

  return [currentTheme.theme, setCurrentTheme, ThemeContext];
};

export default useTheme;
