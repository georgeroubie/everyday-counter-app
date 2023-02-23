import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import _Subtitle from '../../components/typography/Subtitle';
import Lottie from '../../components/ui/Lottie';

const Wrapper = styled.div``;

const Subtitle = styled(_Subtitle)`
  text-align: center;
`;

const NoCounters = () => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate('/add-new-counter')}>
      <Lottie loop={true} centered={true} url={process.env.PUBLIC_URL + '/lottie/empty.json'} width={320} />
      <Subtitle>No counters at the moment</Subtitle>
    </Wrapper>
  );
};

export default NoCounters;
