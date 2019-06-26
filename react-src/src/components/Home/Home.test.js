import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Home from "./Home";

describe("Home container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<Home />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
