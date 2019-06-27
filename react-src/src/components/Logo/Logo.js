import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SiteInfo from "../SiteInfo";
import Link from "../Link";

// Defines the prop types of the component
const propTypes = {
  ...SiteInfo.propTypes
};

// Defines the default props
const defaultProps = {
  ...SiteInfo.defaultProps
};

// Styles for the main container
const Container = styled.section``;

// Styles for the line
const Line = styled.div``;

// Displays the site logo
const Logo = props => {
  const { title, description, url } = props;

  return (
    <Container>
      <Link url={url} title={title}>
        {title}
      </Link>
      <Link url={url} title={description}>
        {description}
      </Link>
      <Line />
    </Container>
  );
};

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
