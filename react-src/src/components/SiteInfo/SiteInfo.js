import React from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { Helmet } from "react-helmet";

// Defines the prop types of the component
const propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string
};

// Defines the default props
const defaultProps = {
  title: "Ioan Chivu",
  description: "Photo traveler",
  url: "http://inu.ro"
};

// Queries the database for site information
export const query = gql`
  query siteInfo {
    generalSettings {
      title
      description
      url
    }
  }
`;

// Displays site info in the document `<head>` with Helmet
// NOTE: use this method instead of manually edit `public/index.php`
const SiteInfo = props => {
  const { title, description, url } = props;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

SiteInfo.propTypes = propTypes;
SiteInfo.defaultProps = defaultProps;

export default SiteInfo;
