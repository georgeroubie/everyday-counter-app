import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.main`
  margin: ${({ theme: { spacing } }) => `${spacing.large} auto ${spacing.xxlarge}`};
`;

const PageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
