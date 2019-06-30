import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {
  size: PropTypes.number,
  children: PropTypes.any.isRequired
};

const defaultProps = {
  size: 1.5,
  children: ""
};

const className = "icon";

const Element = styled("div")(props => ({
  width: `calc(var(--lem) * ${props.size})`,
  height: `calc(var(--lem) * ${props.size})`,
  svg: {
    fontSize: `calc(var(--lem) * ${props.size})`
  }
}));

const Icon = props => {
  const { children } = props;
  console.log(props.size);

  return (
    <Element className={className} {...props}>
      {children}
    </Element>
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
