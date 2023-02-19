import styled from 'styled-components';
import _Hyperlink from '../typography/Hyperlink';

const Wrapper = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 185px;
  height: auto;
`;

const Hyperlink = styled(_Hyperlink)`
  height: 52px;
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
