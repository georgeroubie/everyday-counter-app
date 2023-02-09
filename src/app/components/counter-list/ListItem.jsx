import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../state/Context';
import _Icons from '../icons/Icons';
import _Button from '../ui/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme: { spacing } }) => spacing.large};
  padding: ${({ theme: { spacing } }) => spacing.large};
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
  border: ${({ theme: { colors, shapes } }) => `${shapes.divider} solid ${colors.borderPrimary}`};
  border-radius: ${({ theme: { shapes } }) => shapes.rounded};
  user-select: none;
`;

const Info = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme: { spacing } }) => spacing.small};
`;

const Text = styled.span`
  font-size: ${({ theme: { fontSize } }) => fontSize.normal};
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  width: 100%;
`;

const Strong = styled.strong``;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  min-width: 0;
  flex-shrink: 0;
  gap: ${({ theme: { spacing } }) => spacing.normal};
`;

const IconButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${({ theme: { colors } }) => colors.buttonSecondary};
  border-radius: ${({ theme: { shapes } }) => shapes.rounded};
  flex-shrink: 0;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled(_Button)`
  width: 9rem;
`;

const Icons = styled(_Icons)`
  color: ${({ theme: { colors } }) => colors.buttonSecondaryText};
  width: 0.9rem;
  flex-shrink: 0;
`;

const ListItem = ({ data }) => {
  const { id, name, value, goal } = data;
  const { state, updateCounters } = useContext(AppContext);
  const { list } = state;
  const [enableDeletion, setEnableDeletion] = useState(false);

  function deleteListItem() {
    if (!enableDeletion) {
      setEnableDeletion(true);
      return;
    }

    const updatedList = list.filter((listItem) => listItem.id !== id);
    updateCounters(updatedList);
  }

  function changeValue(newValue) {
    const updatedList = list.map((listItem) => {
      if (listItem.id === id) {
        return {
          ...listItem,
          value: newValue,
        };
      }
      return listItem;
    });
    updateCounters(updatedList);
  }

  function resetValue() {
    changeValue(0);
  }

  function addOne() {
    changeValue(value + 1);
  }

  function removeOne() {
    changeValue(value - 1);
  }

  return (
    <Wrapper>
      <Info>
        <Text>
          <Strong>{name}</Strong>
        </Text>
        <Text>
          Current: <Strong>{value}</Strong>
        </Text>
        {goal && (
          <Text>
            Goal: <Strong>{value >= goal ? 'Achieved 🤩' : `${goal - value} more to go`}</Strong>
          </Text>
        )}
        <Button size="small" variation="error" onClick={deleteListItem}>
          {enableDeletion ? 'Are you sure?' : 'Delete counter'}
        </Button>
      </Info>
      <ButtonWrapper>
        <IconButton onClick={resetValue}>
          <Icons type="Undo" />
        </IconButton>
        <IconButton disabled={value < 1} onClick={removeOne}>
          <Icons type="Minus" />
        </IconButton>
        <IconButton onClick={addOne}>
          <Icons type="Plus" />
        </IconButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

ListItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    goal: PropTypes.number,
  }).isRequired,
};

export default ListItem;
