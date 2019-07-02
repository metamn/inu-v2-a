import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import gql from "graphql-tag";
import { stringify } from "flatted";

import { useTheme, useData } from "./../../hooks";
import Category, { setCategoryStatus } from "../Category";

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
  numberOfEdges: PropTypes.number,
  /**
   * Defines the number of edges saved to local storage
   */
  numberOfEdgesSaved: PropTypes.number,
  /**
   * Defines the function which sets the number of edges saved to local storage
   */
  setNumberOfEdgesSaved: PropTypes.func,
  /**
   * Defines the active category
   */
  activeCategory: PropTypes.number,
  /**
   * Defines the function which sets the active category
   */
  setActiveCategory: PropTypes.func
};

/**
 * Defines the default props
 */
const defaultProps = {
  node: Category.defaultProps,
  edges: [],
  numberOfEdges: 5,
  setNumberOfEdgesSaved: () => {},
  activeCategory: 1,
  setActiveCategory: () => {}
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
const Container = styled("ul")(props => ({}));

/**
 * Creates temporary data to be displayed while real data is loading
 *
 * @param  {Object} props The Object from the temporary data will be created
 * @return {Object}       An array of data
 */
const createTemporaryData = props => {
  const { node, numberOfEdges, numberOfEdgesSaved } = props;

  /**
   * Defines the number of edges to be displayed either from default props or from the local storage
   */
  const newNumberOfEdges =
    typeof numberOfEdgesSaved !== "undefined"
      ? numberOfEdgesSaved
      : numberOfEdges;

  return { edges: Array(newNumberOfEdges).fill({ node: node }) };
};

/**
 * Displays the Categories
 * @param Object props The component properties
 */
const Categories = props => {
  const {
    activeCategory,
    setActiveCategory,
    numberOfEdgesSaved,
    setNumberOfEdgesSaved
  } = props;

  /**
   * Loads temporary data
   */
  const tempData = createTemporaryData({ numberOfEdgesSaved, ...defaultProps });

  /**
   * Loads the real data
   */
  const data = useData(tempData, query, "categories");

  /**
   * Displays the data
   */
  const items = data.edges.map(edge => (
    <Category
      {...edge.node}
      status={setCategoryStatus({
        categoryId: edge.node.categoryId,
        activeCategory: activeCategory
      })}
      setActiveCategory={setActiveCategory}
    />
  ));

  /**
   * Saves the number of categories to local storage
   */
  setNumberOfEdgesSaved(data.edges.length);

  /**
   * Marks the first category as active
   */
  setActiveCategory(data.edges[0].node.categoryId);

  //console.log("category");

  return <Container className="categories">{items}</Container>;
};

Categories.propTypes = propTypes;
Categories.defaultProps = defaultProps;

export default Categories;
