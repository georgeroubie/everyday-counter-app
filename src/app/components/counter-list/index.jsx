import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AppContext } from '../../state/Context';
import Description from '../typography/Description';
import _Title from '../typography/Title';
import _Button from '../ui/Button';
import ListItem from './ListItem';

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
  gap: ${({ theme: { spacing } }) => spacing.large};
`;

const Title = styled(_Title)`
  margin-bottom: 0;
`;

const Button = styled(_Button)`
  width: auto;
  flex-shrink: 0;
`;

const CounterList = () => {
  const navigate = useNavigate();
  const { state } = useContext(AppContext);
  const { list } = state;

  return (
    <>
      <TitleWrapper>
        <Title>Counters</Title>
        <Button size="large" onClick={() => navigate('/add-new-counter')}>
          Add new
        </Button>
      </TitleWrapper>
      {Boolean(list.length) ? (
        list.map((listItem) => <ListItem key={listItem.id} data={listItem} />)
      ) : (
        <Description>There are no counters, add a new one.</Description>
      )}
    </>
  );
};

export default CounterList;
