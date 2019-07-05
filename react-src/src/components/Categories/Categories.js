import React from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { stringify } from "flatted";

import { useData } from "./../../hooks";

import Category, { CategoryPropTypes, CategoryDefaultProps } from "../Category";
import MenuItem from "../MenuItem";

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
  setNumberOfEdgesSaved: PropTypes.func.isRequired
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
  }
};

/**
 * Defines the database query
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
 * Returns the categories for further display
 */
const Categories = props => {
  const { numberOfEdgesSaved, setNumberOfEdgesSaved } = props;

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
  const items = data.edges.map((edge, index) => {
    const { categoryId, name } = edge.node;
    const menuItem = { id: categoryId, name: name };

    return <MenuItem className="menu-item" key={index} {...menuItem} />;
  });

  /**
   * Saves the number of categories to local storage
   */
  setNumberOfEdgesSaved(data.edges.length);

  /**
   * Returns the data
   */
  return <>{items}</>;
};

Categories.propTypes = propTypes;
Categories.defaultProps = defaultProps;

export default Categories;
