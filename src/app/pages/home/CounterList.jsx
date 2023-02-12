import { useContext } from 'react';
import { AppContext } from '../../state/Context';
import Counter from './Counter';
import NoCounters from './NoCounters';

const CounterList = () => {
  const { state } = useContext(AppContext);
  const { list } = state;

  return Boolean(list.length) ? list.map((counter) => <Counter key={counter.id} data={counter} />) : <NoCounters />;
};

export default CounterList;
