import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Repeat from "../Repeat";

const GlobalStyle = createGlobalStyle`
	body {
		font-size: 100%;
		line-height: 1.25;
		--lem: 1.25em;
	}
`;

const Rhythm = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const VerticalRhythm = styled(Rhythm)`
  display: ${props => (props.displayVerticalRhytm ? "flex" : "none")};
  flex-wrap: wrap;
`;

const HorizontalRhythm = styled(Rhythm)`
  display: ${props => (props.displayHorizontalRhytm ? "block" : "none")};
`;

const Line = styled.div`
  box-sizing: border-box;
  border-color: ${props => (props.lineColor ? props.lineColor : "transparent")};
  border-width: 1px;
`;

const VerticalRhythmLine = styled(Line)`
  width: var(--lem);
  height: 100%;
  border-right-style: solid;
`;

const HorizontalRhythmLine = styled(Line)`
  width: 100%;
  height: var(--lem);
  border-bottom-style: solid;
`;

const Container = styled.div``;

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

export default TypographicGrid;
