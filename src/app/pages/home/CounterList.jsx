import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../state/Context';
import Counter from './Counter';
import NoCounters from './NoCounters';

const Wrapper = styled.div``;

const CounterList = () => {
  const { state } = useContext(AppContext);
  const { list } = state;

  return (
    <Wrapper>
      {Boolean(list.length) ? list.map((counter) => <Counter key={counter.id} data={counter} />) : <NoCounters />}
    </Wrapper>
  );
};

export default CounterList;
