import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const sizes = {
  small: {
    icon: {
      strokeWidth: 1,
      size: 16,
    },
    input: {
      "--borderWidth": "1px",
      "--fontSize": `${14 / 16}rem`,
      "--height": `${24 / 16}rem`,
    },
  },
  large: {
    icon: {
      strokeWidth: 2,
      size: 24,
    },
    input: {
      "--borderWidth": "2px",
      "--fontSize": `${18 / 16}rem`,
      "--height": `${36 / 16}rem`,
    },
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input
        style={{
          ...sizes[size].input,
          "--width": width != null ? `${width}px` : undefined,
        }}
        placeholder={placeholder}
      />
      <IconWrapper
        id={icon}
        strokeWidth={sizes[size].icon.strokeWidth}
        size={sizes[size].icon.size}
      />
    </Wrapper>
  );
};

const Input = styled.input`
  appearance: none;

  width: var(--width, 100%);
  height: var(--height);
  padding-inline-start: var(--height);
  border: none;
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  outline-offset: 2px;

  font-size: var(--fontSize);
  font-weight: 700;
  color: inherit;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  inset: 0 auto 0 0;
  margin-block: auto;
  color: inherit;
`;

export default IconInput;
