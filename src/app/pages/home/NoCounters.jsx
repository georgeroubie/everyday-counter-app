import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Description from '../../components/typography/Description';

const Wrapper = styled.div``;

const NoCounters = () => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate('/add-new-counter')}>
      <Description>There are no counters right now, add new.</Description>
    </Wrapper>
  );
};

export default NoCounters;
