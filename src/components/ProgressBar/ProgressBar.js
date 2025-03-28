/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const sizes = {
  small: {
    "--height": `${8 / 16}rem`,
    "--radius": "4px",
    "--padding": "0",
  },
  medium: {
    "--height": `${12 / 16}rem`,
    "--radius": "4px",
    "--padding": "0",
  },
  large: {
    "--height": `${24 / 16}rem`,
    "--radius": "8px",
    "--padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      style={sizes[size]}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <InnerWrapper>
        <Bar value={value} />
      </InnerWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--radius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
`;

const InnerWrapper = styled.div`
  height: 100%;
  border-radius: calc(var(--radius) - var(--padding));
  overflow: hidden;
`;

const Bar = styled.div`
  width: ${(props) => props.value}%;
  height: 100%;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
