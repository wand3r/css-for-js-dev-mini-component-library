import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const iconSize = 24;
  return (
    <Wrapper style={{ "--iconSize": iconSize + "px" }}>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Presentational>
        <span aria-hidden={true}>{displayedValue}</span>
        <IconInline
          aria-hidden={true}
          id="chevron-down"
          size={iconSize}
          strokeWidth={2}
        />
      </Presentational>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: max-content;
  position: relative;
`;

const NativeSelect = styled.select`
  appearance: none;
  border: none;
  opacity: 0;
  position: absolute;
  inset: 0;
  padding: 0;
`;

const Presentational = styled.div`
  padding: 12px 16px;
  padding-right: calc(12px + var(--iconSize) + 12px);
  border-radius: 8px;
  font-size: 1rem;
  color: ${COLORS.gray700};
  background: ${COLORS.transparentGray15};

  ${NativeSelect}:focus-visible + & {
    outline: 2px solid;
    outline-color: ${COLORS.primary};
    outline-color: -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconInline = styled(Icon)`
  position: absolute;
  inset: 0 12px 0 auto;
  margin-block: auto;
  pointer-events: none;
`;

export default Select;
