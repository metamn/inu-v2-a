import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import gql from "graphql-tag";
import { stringify } from "flatted";

import { useTheme, useData } from "./../../hooks";
import ListItem from "../ListItem";

/**
 * Defines the prop types
 */
const propTypes = {
  id: PropTypes.string.isRequired,
  categoryId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

/**
 * Defines the default props
 */
const defaultProps = {
  id: "1",
  categoryId: 1,
  name: "Demo category"
};

/**
 * Defines the query
 */
const query = gql`
  query Categories($hideEmpty: Boolean) {
    categories(where: { hideEmpty: $hideEmpty, orderby: TERM_ORDER }) {
      edges {
        node {
          id
          categoryId
          name
        }
      }
    }
  }
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
  const data = useData([], query, "categories");
  console.log("data:" + stringify(data));

  let items = "";
  if (data && data.edges) {
    items = data.edges.map(edge => <ListItem>{edge.node.name}</ListItem>);
  }

  return <Container className="categories">{items}</Container>;
};

Categories.propTypes = propTypes;
Categories.defaultProps = defaultProps;

export default Categories;
