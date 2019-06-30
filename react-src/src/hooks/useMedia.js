/**
 * Defines the breakpoints
 * NOTE: Best use with the `min-width` technique
 * @type Object
 */
const Breakpoints = {
  mobile: 320,
  tablet: 768,
  laptop: 1280,
  desktop: 1440
};

/**
 * Defines a media query mixin to be used with object notation
 * For template literals see https://www.styled-components.com/docs/advanced/#media-templates
 *
 * Usage:
 * ```
 * [`${Media.mobile}`]: {
 *  display: "none"
 * },
 * ```
 *
 * @type Object
 */
const Media = {
  mobile: `@media (min-width: ${Breakpoints.mobile}px)`,
  tablet: `@media (min-width: ${Breakpoints.tablet}px)`,
  laptop: `@media (min-width: ${Breakpoints.laptop}px)`,
  desktop: `@media (min-width: ${Breakpoints.desktop}px)`
};

/**
 * Media query hook to be used inside components
 * @return {[type]} [description]
 */
const useMedia = () => {};

export { Media, useMedia };
