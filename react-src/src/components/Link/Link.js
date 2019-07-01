import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useTheme } from "../../hooks";

/**
 * Defines the prop types of the component
 * @type Object
 */
const propTypes = {
  /**
   * The link url
   */
  url: PropTypes.string.isrequired,
  /**
   * The link title
   */
  title: PropTypes.string,
  /**
   * The link content
   */
  children: PropTypes.node.isrequired,
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
  const { url, title, children } = props;
  const { theme } = useTheme();
  console.log("link");

  return (
    <Container
      className="link"
      href={url}
      title={title}
      theme={theme}
      {...props}
    >
      {children}
    </Container>
  );
};

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
