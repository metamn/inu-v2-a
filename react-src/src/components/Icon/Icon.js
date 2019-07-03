import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useTheme } from "../../hooks";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The size multiplier.
   * The width and height of the icon will be `var(--lem) * size`.
   */
  size: PropTypes.number,
  /**
   * The icon status
   */
  status: PropTypes.oneOf(["active", "inactive", "hidden"]),
  /**
   * The icon itself. Preferably in SVG format.
   */
  children: PropTypes.any.isRequired
};

/**
 * Defines the default props
 */
const defaultProps = {
  size: 1.5,
  status: "active",
  children: "SVG"
};

/**
 * Displays the icon container
 */
const Container = styled("div")(props => ({
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
 */
const Icon = props => {
  const { children } = props;
  const { theme } = useTheme();
  //console.log("icon");

  return (
    <Container className="icon" theme={theme} {...props}>
      {children}
    </Container>
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
