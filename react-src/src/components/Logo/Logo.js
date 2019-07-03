import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useTheme } from "../../hooks";

import {
  propTypes as SiteInfoPropTypes,
  defaultProps as SiteInfoDefaultProps
} from "../SiteInfo";
import { default as _Link } from "../Link";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * Inherits from SiteInfo
   */
  ...SiteInfoPropTypes,
  /**
   * The line status
   */
  lineStatus: PropTypes.oneOf(["visible", "invisible"])
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...SiteInfoDefaultProps,
  lineStatus: "visible"
};

/**
 * Styles for the main container
 */
const Container = styled("div")([], {
  display: "flex",
  flexWrap: "wrap"
});

/**
 * Styles for the links
 */
const Links = styled("div")([], {
  display: "flex",
  flexDirection: "column"
});

/**
 * Styles the link
 */
const Link = styled(_Link)(props => ({
  ...props.theme.textStyles.large
}));

/**
 * Styles the line
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
