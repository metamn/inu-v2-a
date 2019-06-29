import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ThemeContext } from "../../themes/default.js";

/**
 * Defines the prop types of the component
 * @type Object
 */
const propTypes = {
  /**
   * The link url
   */
  url: PropTypes.string,
  /**
   * The link title
   */
  title: PropTypes.string,
  /**
   * The link content
   */
  children: PropTypes.node,
  /**
   * The link style
   */
  linkStyle: PropTypes.string
};

/**
 * Defines the default props
 * @type Object
 */
const defaultProps = {
  url: "http://example.com",
  title: "http://example.com",
  children: "http://example.com",
  linkStyle: "default"
};

/**
 * Defines the component name
 * @type String
 */
const className = "link";

/**
 * Styles the link
 * @type {[type]}
 */
const Container = styled("a")(props => ({
  ...props.theme.links.default,
  ...props.theme.colorPairs.default
}));

/**
 * Displays a HTML link element
 * @param Object props The component properties
 */
const Link = props => {
  const { children } = props;
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  return (
    <Container className={className} theme={theme} {...props}>
      {children}
    </Container>
  );
};

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
