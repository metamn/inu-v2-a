import useMedia from "./useMedia";

// Checks if the user / browser prefers dark mode
// From https://usehooks.com/usePrefersDarkMode
function usePrefersDarkMode() {
  return useMedia(["(prefers-color-scheme: dark)"], [true], false);
}

export default usePrefersDarkMode;
