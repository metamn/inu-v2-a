import React from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { Helmet } from "react-helmet";

/**
 * Defines the prop types of the component
 * @type Object
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
 * @type Object
 */
const defaultProps = {
  title: "Ioan Chivu",
  description: "Photo traveler",
  url: "http://inu.ro"
};

/**
 * Defines the query fragment needed by the component
 * @type Object
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
 * NOTE: use this method instead of manually edit `public/index.php`
 * @param Object props The component properties
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
