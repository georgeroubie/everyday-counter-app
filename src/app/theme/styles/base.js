import { css } from 'styled-components';

const base = css`
  *,
  :before,
  :after {
    box-sizing: border-box;
  }

  html,
  body {
    background-color: ${({ theme: { colors } }) => colors.background};
  }

  button {
    appearance: none;
    min-width: 0;
    border: 0;
    user-select: none;

    &:hover {
      text-decoration: none;
    }

    &:focus,
    &:active {
      outline: 0;
      box-shadow: ${({ theme: { spacing, colors } }) => `0 0 0 ${spacing.xsmall} ${colors.outline}`};
      text-decoration: none;
    }

    &.disabled,
    &:disabled {
      opacity: 0.65;
      box-shadow: none;
      text-decoration: none;
    }

    &:not(:disabled) {
      cursor: pointer;
    }
  }
`;

export { base };
