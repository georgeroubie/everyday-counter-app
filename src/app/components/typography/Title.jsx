import PropTypes from 'prop-types';
import styled from 'styled-components';
import _Icons from './../icons/Icons';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing.normal};
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
`;

const H1 = styled.h1`
  font-size: ${({ theme: { fontSize } }) => fontSize.xlarge};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.xlarge};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.extraBold};
  cursor: default;
  margin: 0;
`;

const Icons = styled(_Icons)`
  width: 1.9rem;
  height: 1.9rem;
  padding: ${({ theme: { spacing } }) => spacing.small};
  background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
  border-radius: ${({ theme: { shapes } }) => shapes.circle};
  cursor: pointer;
`;

const Title = ({ className, children, onBack }) => {
  return (
    <Wrapper className={className} onClick={onBack}>
      {onBack && <Icons type="AngleLeft" />}
      <H1>{children}</H1>
    </Wrapper>
  );
};

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onBack: PropTypes.func,
};

Title.defaultProps = {
  className: '',
  onBack: undefined,
};

export default Title;
