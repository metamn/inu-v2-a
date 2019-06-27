import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import SiteInfo from "./SiteInfo";

describe("SiteInfo container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<SiteInfo />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
