import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import gql from "graphql-tag";
import { stringify } from "flatted";

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
  name: PropTypes.string.isRequired,
  /**
   * The category status
   */
  status: PropTypes.oneOf(["active", "inactive", "hidden"])
};

/**
 * Defines the default props
 */
const defaultProps = {
  id: "1",
  categoryId: 1,
  name: "/ / / / / / / / / ",
  status: "inactive"
};

/**
 * Defines the query fragment needed by the component
 * @type Object
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
 * Displays the Category container
 */
const Container = styled("li")(props => ({
  textDecoration: props.status === "active" ? "line-through" : "none",
  display: props.status === "hidden" ? "none" : "flex",
  cursor: "pointer",

  "&:hover": {
    textDecoration: "line-through"
  }
}));

/**
 * Sets the status of a category
 * @param {[type]} props [description]
 */
const setCategoryStatus = props => {
  const { categoryId, activeCategory } = props;

  return categoryId === activeCategory ? "active" : "inactive";
};

/**
 * Displays the Category
 * @param Object props The component properties
 */
const Category = props => {
  const { name } = props;

  return (
    <Container className="category" {...props}>
      {name}
    </Container>
  );
};

Category.propTypes = propTypes;
Category.defaultProps = defaultProps;
Category.fragments = queryFragment;

export default Category;
export { setCategoryStatus };
