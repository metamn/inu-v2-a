import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import Repeat from "../Repeat";

import { ThemeContext } from "../../themes/default.js";

/**
 * Defines the component prop types
 * @type Object
 */
const propTypes = {
  /**
   * Display vertical rhythm lines?
   */
  displayVerticalRhytm: PropTypes.bool,
  /**
   * Display horizontal rhythm lines?
   */
  displayHorizontalRhytm: PropTypes.bool,
  /**
   * The number of horizontal rhythm lines
   */
  numberOfHorizontalLines: PropTypes.number,
  /**
   * The number of vertical rhythm lines
   */
  numberOfVerticalLines: PropTypes.number,
  /**
   * The color of the rhythm lines
   */
  lineColor: PropTypes.string
};

/**
 * Defines the default props
 * @type Object
 */
const defaultProps = {
  displayVerticalRhytm: false,
  displayHorizontalRhytm: false,
  numberOfHorizontalLines: 100,
  numberOfVerticalLines: 100,
  lineColor: "gray"
};

/**
 * Defines the component name
 * @type String
 */
const className = "typographic-grid";

/**
 * Sets up the typographic grid
 * It's hand coded since `createGlobalStyle` doesn't supports yet object notation
 * @type String
 */
const GlobalStyle = createGlobalStyle`
	body {
		font-size: 100%;
	    line-height: 1.25;
	    --lem: 1.25em;
	}
`;

/**
 * Shared settings for the rhythm containers
 * @type String
 */
const Rhythm = styled("div")([], {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%"
});

/**
 * The vertical rhythm container
 * @type String
 */
const VerticalRhythm = styled(Rhythm)(props => ({
  display: props.displayVerticalRhytm ? "flex" : "none",
  flexWrap: "wrap"
}));

/**
 * The horizontal rhythm container
 * @type String
 */
const HorizontalRhythm = styled(Rhythm)(props => ({
  display: props.displayHorizontalRhytm ? "flex" : "none",
  flexWrap: "wrap"
}));

/**
 * Shared settings for the rhythm lines
 * @type String
 */
const Line = styled.div(props => ({
  boxSizing: "border-box",
  borderColor: props.lineColor ? props.lineColor : "transparent",
  borderWidth: "1px"
}));

/**
 * The vertical rhythm line
 * @type String
 */
const VerticalRhythmLine = styled(Line)([], {
  width: "var(--lem)",
  height: "100%",
  borderRightStyle: "solid"
});

/**
 * The horizontal rhythm line
 * @type String
 */
const HorizontalRhythmLine = styled(Line)([], {
  width: "100%",
  height: "var(--lem)",
  borderBottomStyle: "solid"
});

/**
 * The main container
 * @type Sting
 */
const Container = styled.div([]);

/**
 * Displays horizontal and vertical lines across the page
 * It helps to verify elements are all perfectly aligned to the grid
 * See: http://metamn.io/mr-ui
 * @param Object props The component properties
 */
const TypographicGrid = props => {
  const {
    displayVerticalRhytm,
    displayHorizontalRhytm,
    numberOfHorizontalLines,
    numberOfVerticalLines,
    lineColor
  } = props;

  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  return (
    <>
      <GlobalStyle theme={theme} />
      {(displayHorizontalRhytm || displayVerticalRhytm) && (
        <Container className={className}>
          {displayHorizontalRhytm && (
            <HorizontalRhythm
              className="horizontal-lines"
              displayHorizontalRhytm={displayHorizontalRhytm}
            >
              <Repeat numberOfTimes={numberOfHorizontalLines} startAt={0}>
                {i => <HorizontalRhythmLine key={i} lineColor={lineColor} />}
              </Repeat>
            </HorizontalRhythm>
          )}
          {displayVerticalRhytm && (
            <VerticalRhythm
              className="vertical-lines"
              displayVerticalRhytm={displayVerticalRhytm}
            >
              <Repeat numberOfTimes={numberOfVerticalLines} startAt={0}>
                {i => <VerticalRhythmLine key={i} lineColor={lineColor} />}
              </Repeat>
            </VerticalRhythm>
          )}
        </Container>
      )}
    </>
  );
};

TypographicGrid.propTypes = propTypes;
TypographicGrid.defaultProps = defaultProps;

export default TypographicGrid;
