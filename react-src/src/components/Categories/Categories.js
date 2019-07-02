import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import gql from "graphql-tag";

import { useData } from "./../../hooks";
import Category, {
  setCategoryStatus,
  propTypes as CategoryPropTypes,
  defaultProps as CategoryDefaultProps
} from "../Category";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * A category node
   */
  node: CategoryPropTypes,
  /**
   * A list of category nodes
   */
  edges: PropTypes.arrayOf(CategoryPropTypes),
  /**
   * The number of initial edges aka. how many loading indicators to display at the first load.
   */
  numberOfEdges: PropTypes.number,
  /**
   * The number of edges saved to local storage. After the data is loaded the real number of edges is saved to the local storage. At the next load the same amount of loading inidcators will be displayed as the real number of edges.
   */
  numberOfEdgesSaved: PropTypes.number.isRequired,
  /**
   * The function which saves the number of edges to local storage
   */
  setNumberOfEdgesSaved: PropTypes.func.isRequired,
  /**
   * The active category
   */
  activeCategory: PropTypes.number.isRequired,
  /**
   * The function which sets the active category
   */
  setActiveCategory: PropTypes.func.isRequired
};

/**
 * Defines the default props
 */
const defaultProps = {
  node: CategoryDefaultProps,
  edges: Array(5).fill(CategoryDefaultProps),
  numberOfEdges: 5,
  numberOfEdgesSaved: null,
  setNumberOfEdgesSaved: () => {
    console.log("setNumberOfEdgesSaved called");
  },
  activeCategory: 1,
  setActiveCategory: () => {
    console.log("setActiveCategory called");
  }
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
 * Displays the categories
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
   * Puts together the data
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

  /**
   * Renders the results
   */
  return <Container className="categories">{items}</Container>;
};

Categories.propTypes = propTypes;
Categories.defaultProps = defaultProps;

export default Categories;
