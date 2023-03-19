import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  padding-bottom: env(safe-area-inset-bottom);
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.background};
  z-index: ${({ theme: { zIndex } }) => zIndex.fixed};

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    position: static;
    background: none;
    padding: 0;
  }
`;

const Items = styled.div`
  max-width: 630px;
  margin: 0 auto;
  padding: ${({ theme: { spacing } }) => `${spacing.normal} ${spacing.large}`};

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    margin-top: ${({ theme: { spacing } }) => spacing.xlarge};
    padding: 0;
  }
`;

const BottomArea = (props) => {
  const { className, children } = props;

  return (
    <Wrapper className={className}>
      <Items>{children}</Items>
    </Wrapper>
  );
};

BottomArea.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

BottomArea.defaultProps = {
  className: '',
};

export default BottomArea;
