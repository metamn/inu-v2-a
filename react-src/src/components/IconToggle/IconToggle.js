import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Icon from "../Icon";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The first, active by default icon
   */
  icon1: PropTypes.element.isRequired,
  /**
   * The second, inactive by default icon
   */
  icon2: PropTypes.element.isRequired,
  /**
   * The component status
   */
  status: PropTypes.oneOf(["active", "inactive", "hidden"])
};

/**
 * Defines the default props
 */
const defaultProps = {
  icon1: <div>icon1</div>,
  icon2: <div>icon2</div>,
  status: "active"
};

/**
 * Displays the IconToggle container
 */
const Container = styled("div")(props => ({
  display: props.status === "hidden" ? "none" : "flex",
  cursor: "pointer"
}));

/**
 * Displays two icons which can be toggled
 */
const IconToggle = props => {
  const { icon1, icon2 } = props;

  return (
    <Container className="icon-toggle" {...props}>
      <Icon status="active">{icon1}</Icon>
      <Icon status="hidden">{icon2}</Icon>
    </Container>
  );
};

IconToggle.propTypes = propTypes;
IconToggle.defaultProps = defaultProps;

export default IconToggle;
