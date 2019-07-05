import React from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The GraphQL id
   */
  id: PropTypes.string.isRequired,
  /**
   * The category id from the database
   */
  categoryId: PropTypes.number.isRequired,
  /**
   * The category name
   */
  name: PropTypes.string.isRequired
};

/**
 * Defines the default props
 */
const defaultProps = {
  id: "1",
  categoryId: 1,
  name: "/ / / / / / / / / "
};

/**
 * Defines the query fragment needed by the component
 */
const queryFragment = {
  node: gql`
    fragment CategoryNode on Category {
      id
      categoryId
      name
    }
  `
};

/**
 * Returns nothing. Only the props and the query fragment will be reused later from this component.
 */
const Category = props => {
  return null;
};

Category.propTypes = propTypes;
Category.defaultProps = defaultProps;
Category.fragments = queryFragment;

export default Category;
export { propTypes as CategoryPropTypes, defaultProps as CategoryDefaultProps };
