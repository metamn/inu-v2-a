/**
 * Checks if user prefers dark theme
 * Adapted from https://usehooks.com/useMedia/
 *
 * @param  Array   queries      The media query strings
 * @param  Array   values       The media query values
 * @param  Boolean defaultValue The default value
 * @return Boolean              The browser response
 */
const useMedia = (queries, values, defaultValue) => {
  /**
   * Array containing a media query list for each query
   */
  const mediaQueryLists = queries.map(q => window.matchMedia(q));

  /**
   * Get index of first media query that matches
   */
  const index = mediaQueryLists.findIndex(mql => mql.matches);

  /**
   * Return related value or defaultValue if none
   */
  return typeof values[index] !== "undefined" ? values[index] : defaultValue;
};

export default useMedia;
