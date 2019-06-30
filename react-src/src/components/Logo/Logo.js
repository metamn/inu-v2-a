import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useTheme, Media } from "../../hooks";

import SiteInfo from "../SiteInfo";
import { default as _Link } from "../Link";
import { Section as _Section } from "../SemanticHTML";

/**
 * Defines the prop types of the component
 * @type Object
 */
const propTypes = {
  /**
   * Inherits from SiteInfo
   * @type Object
   */
  ...SiteInfo.propTypes
};

/**
 * Defines the default props
 * @type Object
 */
const defaultProps = {
  ...SiteInfo.defaultProps
};

/**
 * Defines the component name
 * @type String
 */
const className = "logo";

/**
 * Styles for the main container
 * @type {[type]}
 */
const Section = styled(_Section)([], {
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
const Line = styled("div")([], {
  width: "calc(var(--lem) * 8)",
  height: "var(--lem)",
  borderBottom: "1px solid",
  transform: "rotate(-65deg) translateX(calc(var(--lem) * -2))",

  [`${Media.mobile}`]: {
    display: "none"
  },

  [`${Media.tablet}`]: {
    display: "flex"
  }
});

/**
 * Displays the site logo
 * @param Object props The component properties
 */
const Logo = props => {
  const { title, description } = props;
  const [theme] = useTheme();

  return (
    <Section className={className} title="Logo">
      <Links className="links">
        <Link className="link" theme={theme} {...props}>
          {title}
        </Link>
        <Link className="link" theme={theme} {...props}>
          {description}
        </Link>
      </Links>
      <Line className="line" />
    </Section>
  );
};

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
