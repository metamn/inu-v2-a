import React from "react";
import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import Repeat from "../Repeat";

// Defines the component prop types
const Props = {
  displayVerticalRhytm: PropTypes.bool,
  displayHorizontalRhytm: PropTypes.bool,
  numberOfHorizontalLines: PropTypes.number,
  numberOfVerticalLines: PropTypes.number,
  lineColor: PropTypes.string
};

// Defines the default prop types
const DefaultProps = {
  displayVerticalRhytm: false,
  displayHorizontalRhytm: false,
  numberOfHorizontalLines: 100,
  numberOfVerticalLines: 100,
  lineColor: "gray"
};

// Makes typographic settings globally available via CSS vars
const GlobalStyle = createGlobalStyle`
	body {
		font-size: 100%;
		line-height: 1.25;
		--lem: 1.25em;
	}
`;

// Common settings for the rhythm containers
const Rhythm = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

// The vertical rhythm container
const VerticalRhythm = styled(Rhythm)`
  display: ${props => (props.displayVerticalRhytm ? "flex" : "none")};
  flex-wrap: wrap;
`;

// The horizontal rhythm container
const HorizontalRhythm = styled(Rhythm)`
  display: ${props => (props.displayHorizontalRhytm ? "block" : "none")};
`;

// Common settings for the rhythm lines
const Line = styled.div`
  box-sizing: border-box;
  border-color: ${props => (props.lineColor ? props.lineColor : "transparent")};
  border-width: 1px;
`;

// The vertical rhythm line
const VerticalRhythmLine = styled(Line)`
  width: var(--lem);
  height: 100%;
  border-right-style: solid;
`;

// The horizontal rhythm line
const HorizontalRhythmLine = styled(Line)`
  width: 100%;
  height: var(--lem);
  border-bottom-style: solid;
`;

// The main container
const Container = styled.div``;

// The main component
// - Displays horizontal and vertical lines across the page
// - It helps verify elements are perfectly aligned to the grid
// - See: http://metamn.io/mr-ui
const TypographicGrid = props => {
  const {
    displayVerticalRhytm,
    displayHorizontalRhytm,
    numberOfHorizontalLines,
    numberOfVerticalLines,
    lineColor
  } = props;

  return (
    <>
      <GlobalStyle />
      {(displayHorizontalRhytm || displayVerticalRhytm) && (
        <Container className="typographic-grid">
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

TypographicGrid.propTypes = Props;
TypographicGrid.defaultProps = DefaultProps;

export default TypographicGrid;
