import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../state/Context';
import Counter from './Counter';
import NoCounters from './NoCounters';

const Wrapper = styled.div``;

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
