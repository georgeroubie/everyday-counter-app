import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.main`
  position: relative;
  margin: ${({ theme: { spacing } }) => `${spacing.large} auto ${spacing.xxlarge}`};

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    max-width: 390px;
    margin: ${({ theme: { spacing } }) => `${spacing.large} auto ${spacing.large}`};
  }
`;

const PageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
