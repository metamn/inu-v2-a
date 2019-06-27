import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { ThemeContext } from "../../themes/default.js";

import SiteInfo from "../SiteInfo";
import Link from "../Link";
import Media from "../Media";

// Defines the prop types of the component
const propTypes = {
  ...SiteInfo.propTypes
};

// Defines the default props
const defaultProps = {
  ...SiteInfo.defaultProps
};

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
const StyledLink = styled.div(props => ({
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

// Displays the site logo
const Logo = props => {
  const { title, description, url } = props;
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  return (
    <Container>
      <Links>
        <StyledLink theme={theme} url={url} title={title}>
          {title}
        </StyledLink>
        <StyledLink theme={theme} url={url} title={description}>
          {description}
        </StyledLink>
      </Links>
      <Line />
    </Container>
  );
};

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
