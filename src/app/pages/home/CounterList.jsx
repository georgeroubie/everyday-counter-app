import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../state/Context';
import _Counter from './Counter';
import NoCounters from './NoCounters';

const Wrapper = styled.div`
  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme: { spacing } }) => spacing.large};
  }
`;

const Counter = styled(_Counter)`
  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    margin-bottom: 0;
  }
`;

const CounterList = () => {
  const { state } = useContext(AppContext);
  const { list } = state;

  return Boolean(list.length) ? (
    <Wrapper>
      {list.map((counter) => (
        <Counter key={counter.id} data={counter} />
      ))}
    </Wrapper>
  ) : (
    <NoCounters />
  );
};

export default CounterList;
