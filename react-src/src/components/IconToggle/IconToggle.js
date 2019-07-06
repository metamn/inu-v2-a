import React, { useState } from "react";
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
  status: PropTypes.oneOf(["active", "inactive", "hidden"]),
  /**
   * The initial icon toggle status
   */
  initialIconToggleStatus: PropTypes.boolean
};

/**
 * Defines the default props
 */
const defaultProps = {
  icon1: <div>icon1</div>,
  icon2: <div>icon2</div>,
  status: "active",
  initialIconToggleStatus: false
};

/**
 * Styles the IconToggle container
 */
const Container = styled("div")(props => ({
  display: props.status === "hidden" ? "none" : "flex",
  cursor: "pointer"
}));

/**
 * Displays two icons which can be toggled
 */
const IconToggle = props => {
  const { icon1, icon2, status, initialIconToggleStatus } = props;

  /**
   * Manages the state of the toggle icon
   */
  const [iconToggled, setIconToggled] = useState(initialIconToggleStatus);

  /**
   * Derives the state of the icons
   */
  const icon1Status = iconToggled ? "hidden" : "active";
  const icon2Status = iconToggled ? "active" : "hidden";

  return (
    <Container className="icon-toggle" {...props}>
      <Icon status={icon1Status}>{icon1}</Icon>
      <Icon status={icon2Status}>{icon2}</Icon>
    </Container>
  );
};

IconToggle.propTypes = propTypes;
IconToggle.defaultProps = defaultProps;

export default IconToggle;
export {
  propTypes as IconTogglePropTypes,
  defaultProps as IconToggleDefaultProps
};
