import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const LARGE_TOP_SPACE = 30;

const Wrapper = styled.div`
  max-width: 630px;
  height: 100vh;
  overflow: hidden auto;
  margin: 0 auto;
  padding: 0 ${({ theme: { spacing } }) => spacing.large};
  background-color: ${({ theme: { colors } }) => colors.surface};
  position: relative;

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    margin-top: ${LARGE_TOP_SPACE}px;
    border-top-left-radius: ${({ theme: { shapes } }) => shapes.roundedLarge};
    border-top-right-radius: ${({ theme: { shapes } }) => shapes.roundedLarge};
  }
`;

const AppWrapper = ({ children }) => {
  const [height, setHeight] = useState();

  const changeHeightValue = useCallback(() => {
    const currentHeight = window.innerHeight;
    const currentWidth = window.innerWidth;

    let calculatedHeight;
    if (currentWidth > 992) {
      calculatedHeight = `${currentHeight - LARGE_TOP_SPACE}px`;
    } else {
      calculatedHeight = `${currentHeight}px`;
    }

    if (height !== calculatedHeight) {
      setHeight(calculatedHeight);
    }
  }, [height]);

  useEffect(() => {
    changeHeightValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('resize', changeHeightValue);
    return () => {
      window.removeEventListener('resize', changeHeightValue);
    };
  }, [height, changeHeightValue]);

  return <Wrapper style={{ height }}>{children}</Wrapper>;
};

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
