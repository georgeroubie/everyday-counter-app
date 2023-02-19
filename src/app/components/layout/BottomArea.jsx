import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  padding: ${({ theme: { spacing } }) => `${spacing.normal} ${spacing.large}`};
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.background};
  z-index: ${({ theme: { zIndex } }) => zIndex.fixed};
  border-top: ${({ theme: { colors, shapes } }) => `${shapes.divider} solid ${colors.borderPrimary}`};
`;

const Items = styled.div`
  max-width: 990px;
  margin: 0 auto;
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
