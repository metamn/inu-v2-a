import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useTheme } from "../../hooks";

/**
 * Defines the prop types of the component
 * @type {Object}
 */
const propTypes = {
  /**
   * The size multiplier
   * The width, height of the icon will be `var(--lem) * size`
   * @type {[type]}
   */
  size: PropTypes.number,
  /**
   * The icon status
   * @type {[type]}
   */
  status: PropTypes.oneOf(["active", "inactive", "hidden"]),
  /**
   * The icon itself. Preferably in SVG format.
   * @type {[type]}
   */
  children: PropTypes.any.isRequired
};

/**
 * Defines the default props
 * @type {Object}
 */
const defaultProps = {
  size: 1.5,
  status: "active",
  children: ""
};

/**
 * Displays the icon container
 * @type {[type]}
 */
const Element = styled("div")(props => ({
  width: `calc(var(--lem) * ${props.size})`,
  height: `calc(var(--lem) * ${props.size})`,

  visibility: props.status === "hidden" ? "hidden" : "visible",
  color:
    props.status === "active"
      ? props.theme.colors.text
      : props.theme.colors.inactive,
  cursor: props.status === "active" ? "pointer" : "default",

  svg: {
    fontSize: `calc(var(--lem) * ${props.size})`
  }
}));

/**
 * Displays an icon
 * @param Object props The component properties
 */
const Icon = props => {
  const { children } = props;
  const [theme] = useTheme();

  return (
    <Element className="icon" theme={theme} {...props}>
      {children}
    </Element>
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
