import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { ThemeContext } from "../../themes/default.js";

import SiteInfo from "../SiteInfo";
import Link from "../Link";
import Media from "../Media";

/**
 * Defines the prop types of the component
 * @type Object
 */
const propTypes = {
  /**
   * Inherints from SiteInfo
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

// Styles for the main container
const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

// Styles for the links
const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

// Styles the link
const StyledLink = styled(Link)(props => ({
  fontSize: props.theme.textStyles.large.fontSize
}));

// Styles for the line
const Line = styled.div`
  width: calc(var(--lem) * 8);
  height: var(--lem);
  border-bottom: 1px solid;
  transform: rotate(-65deg) translateX(calc(var(--lem) * -2));

  ${Media.mobile`display: none`}
  ${Media.tablet`display: flex`}
`;

/**
 * Displays the site logo
 * @param Object props The component properties
 */
const Logo = props => {
  const { className, title, description, url } = props;
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  return (
    <Container className={className}>
      <Links className="links">
        <StyledLink theme={theme} {...props}>
          {title}
        </StyledLink>
        <StyledLink theme={theme} {...props}>
          {description}
        </StyledLink>
      </Links>
      <Line className="line" />
    </Container>
  );
};

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
