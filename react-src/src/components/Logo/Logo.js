import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useTheme } from "../../hooks";

import SiteInfo from "../SiteInfo";
import { default as _Link } from "../Link";

/**
 * Defines the prop types of the component
 * @type Object
 */
const propTypes = {
  /**
   * Inherits from SiteInfo
   * @type Object
   */
  ...SiteInfo.propTypes,
  /**
   * The line status
   * @type {[type]}
   */
  lineStatus: PropTypes.oneOf(["visible", "invisible"])
};

/**
 * Defines the default props
 * @type Object
 */
const defaultProps = {
  ...SiteInfo.defaultProps,
  lineStatus: "visible"
};

/**
 * Styles for the main container
 * @type {[type]}
 */
const Container = styled("div")([], {
  display: "flex",
  flexWrap: "wrap"
});

/**
 * Styles for the links
 * @type {[type]}
 */
const Links = styled("div")([], {
  display: "flex",
  flexDirection: "column"
});

/**
 * Styles the link
 * @type {[type]}
 */
const Link = styled(_Link)(props => ({
  ...props.theme.textStyles.large
}));

/**
 * Styles the line
 * @type {[type]}
 */
const Line = styled("div")(props => ({
  width: "calc(var(--lem) * 8)",
  height: "var(--lem)",
  borderBottom: "1px solid",
  transform: "rotate(-65deg) translateX(calc(var(--lem) * -2))",
  display: props.lineStatus === "visible" ? "flex" : "none"
}));

/**
 * Displays the site logo
 * @param Object props The component properties
 */
const Logo = props => {
  const { title, description } = props;
  const { theme } = useTheme();
  //console.log("logo");

  return (
    <Container className="logo">
      <Links className="links">
        <Link className="link" theme={theme} {...props}>
          <h1>{title}</h1>
        </Link>
        <Link className="link" theme={theme} {...props}>
          <h2>{description}</h2>
        </Link>
      </Links>
      <Line className="line" {...props} />
    </Container>
  );
};

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
