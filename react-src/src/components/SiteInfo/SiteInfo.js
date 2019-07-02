import React from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { Helmet } from "react-helmet";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The site title
   */
  title: PropTypes.string,
  /**
   * The site description
   */
  description: PropTypes.string,
  /**
   * The site url
   */
  url: PropTypes.string
};

/**
 * Defines the default props
 */
const defaultProps = {
  title: "Ioan Chivu",
  description: "Photo traveler",
  url: "http://inu.ro"
};

/**
 * Defines the query fragment needed by the component
 */
const queryFragment = {
  settings: gql`
    fragment SiteInfoSettings on GeneralSettings {
      title
      description
      url
    }
  `
};

/**
 * Displays site info in the document `<head>` with Helmet
 *
 * NOTE: use this method instead of manually edit `public/index.php`
 */
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
SiteInfo.fragments = queryFragment;

export default SiteInfo;
export { propTypes, defaultProps };
