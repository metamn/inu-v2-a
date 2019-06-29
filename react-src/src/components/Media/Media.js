import { css } from "styled-components";

/**
 * Defines the breakpoints
 * NOTE: Use breakpoints with the `min-width` technique
 * @type Object
 */
const Breakpoints = {
  mobile: 320,
  tablet: 768,
  laptop: 1280,
  desktop: 1440
};

/**
 * Defines a media query mixin
 * Inspiration: https://www.styled-components.com/docs/advanced/#media-templates
 * @type string
 */
const Media2 = Object.keys(Breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${Breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

const Media = "@media (min-width: 1024px)";

export default Media;
