import styled from 'styled-components';
import _Hyperlink from '../typography/Hyperlink';

const Wrapper = styled.div`
  background-color: #ffdd00;
  border-radius: ${({ theme: { shapes } }) => shapes.rounded};
  height: 51px;
`;

const Image = styled.img`
  width: 182px;
  height: auto;
`;

const Hyperlink = styled(_Hyperlink)`
  display: block;
  text-align: center;
  height: 51px;
  width: 100%;
`;

const Donation = () => {
  return (
    <Wrapper>
      <Hyperlink href="https://www.buymeacoffee.com/georgeroubie" target="_blank">
        <Image src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" />
      </Hyperlink>
    </Wrapper>
  );
};

export default Donation;
