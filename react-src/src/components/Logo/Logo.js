import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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

  return (
    <Container>
      <Links>
        <Link url={url} title={title}>
          {title}
        </Link>
        <Link url={url} title={description}>
          {description}
        </Link>
      </Links>
      <Line />
    </Container>
  );
};

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
