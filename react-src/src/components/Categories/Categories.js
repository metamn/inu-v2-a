import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import gql from "graphql-tag";
import { stringify } from "flatted";

import { useTheme, useData } from "./../../hooks";
import Category from "../Category";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * Defines a category node
   */
  node: Category.propTypes,
  /**
   * Defines a list of category nodes
   */
  edges: PropTypes.array,
  /**
   * Defines the number of edges
   */
  numberOfEdges: PropTypes.number
};

/**
 * Defines the default props
 */
const defaultProps = {
  node: Category.defaultProps,
  edges: [],
  numberOfEdges: 10
};

/**
 * Defines the query
 */
const query = gql`
  query Categories($hideEmpty: Boolean) {
    categories(where: { hideEmpty: $hideEmpty, orderby: TERM_ORDER }) {
      edges {
        node {
          ...CategoryNode
        }
      }
    }
  }
  ${Category.fragments.node}
`;

/**
 * Displays the Categories container
 */
const Container = styled("div")(props => ({}));

/**
 * Displays the Categories
 * @param Object props The component properties
 */
const Categories = props => {
  const tempNode = { node: { ...defaultProps } };
  const tempData = { edges: Array(10).fill(tempNode) };
  const data = useData(tempData, query, "categories");

  let items = "";
  if (data && data.edges) {
    items = data.edges.map(edge => <Category {...edge.node} />);
  }

  return <Container className="categories">{items}</Container>;
};

Categories.propTypes = propTypes;
Categories.defaultProps = defaultProps;

export default Categories;
