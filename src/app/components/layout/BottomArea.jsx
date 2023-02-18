import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  padding: ${({ theme: { spacing } }) => spacing.large};
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.background};
  z-index: 1;
`;

const Items = styled.div`
  max-width: 960px;
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

export default BottomArea;
