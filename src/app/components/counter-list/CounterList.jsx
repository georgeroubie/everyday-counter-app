import { useContext } from 'react';
import { AppContext } from '../../state/Context';
import Description from '../typography/Description';
import Title from '../typography/Title';

const CounterList = () => {
  const { state } = useContext(AppContext);
  const { list } = state;
  return (
    <>
      <Title>Counter List</Title>
      {!list?.length ? (
        <Description>There are no counters, add a new one.</Description>
      ) : (
        list.map(({ id, name }) => <Description key={id}>{name}</Description>)
      )}
    </>
  );
};

export default CounterList;
