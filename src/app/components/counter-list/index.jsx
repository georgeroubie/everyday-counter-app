import { useContext } from 'react';
import { AppContext } from '../../state/Context';
import Description from '../typography/Description';
import Title from '../typography/Title';
import ListItem from './ListItem';

const CounterList = () => {
  const { state } = useContext(AppContext);
  const { list } = state;

  return (
    <>
      <Title>Counter List</Title>
      {!list?.length ? (
        <Description>There are no counters, add a new one.</Description>
      ) : (
        list.map(({ id, name }) => <ListItem key={id} id={id} name={name} />)
      )}
    </>
  );
};

export default CounterList;
