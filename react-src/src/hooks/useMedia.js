import { useMediaQuery } from "react-responsive";
import { stringify } from "flatted";

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
 * Defines a media query mixin to be used with styled components / object notation
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
 * Defines media queries for a list of devices
 *
 * @type Object
 */
const Devices = {
  mobile: `(max-width: ${Breakpoints.tablet - 1}px)`,
  tablet: `(min-width: ${
    Breakpoints.tablet
  }px) and (max-width: ${Breakpoints.laptop - 1}px)`,
  laptop: `(min-width: ${
    Breakpoints.laptop
  }px) and (max-width: ${Breakpoints.desktop - 1}px)`,
  desktop: `(min-width: ${Breakpoints.desktop}px)`
};

/**
 * Media query hook to be used inside components
 * @return {[type]} [description]
 */
const useMedia = breakpoint => {
  return useMediaQuery({
    query: Devices[breakpoint]
  });
};

export { Media, useMedia };
