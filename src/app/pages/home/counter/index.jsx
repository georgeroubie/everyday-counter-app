import PropTypes from 'prop-types';
import { useContext, useMemo, useState } from 'react';
import styled from 'styled-components';
import _Icons from '../../../components/icons/Icons';
import _Button from '../../../components/ui/Button';
import Progress from '../../../components/ui/Progress';
import { AppContext } from '../../../state/Context';
import GoalText from './GoalText';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  gap: ${({ theme: { spacing } }) => spacing.large};
  padding: ${({ theme: { spacing } }) => spacing.large};
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
  border-radius: ${({ theme: { shapes } }) => shapes.rounded};
  background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
  user-select: none;
`;

const Text = styled.span``;

const GoalWrapper = styled.div`
  display: flex;
  gap: ${({ theme: { spacing } }) => spacing.normal};
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const Strong = styled.strong`
  min-width: 2.3rem;
  text-align: center;
  display: inline-block;
  font-size: ${({ theme: { fontSize } }) => fontSize.large};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: max-content;
  justify-content: space-between;
  gap: ${({ theme: { spacing } }) => spacing.normal};
  min-width: 0;
`;

const IconButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  min-width: 0;
  flex-shrink: 0;
  gap: ${({ theme: { spacing } }) => spacing.normal};
`;

const IconButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${({ theme: { colors } }) => colors.background};
  border-radius: ${({ theme: { shapes } }) => shapes.rounded};
  flex-shrink: 0;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled(_Button)`
  width: 100%;
`;

const Icons = styled(_Icons)`
  color: ${({ theme: { colors } }) => colors.buttonSecondaryText};
  width: 0.9rem;
  flex-shrink: 0;
`;

const Counter = ({ className, data }) => {
  const { id, name, value, goal, limit } = data;
  const { state, updateCounters } = useContext(AppContext);
  const { list } = state;
  const goalIsAchieved = goal ? value >= goal : true;
  const limitIsExceed = limit ? value >= limit : false;
  const [enableDeletion, setEnableDeletion] = useState(false);

  const showGoal = useMemo(() => {
    if (goal) {
      if (!goalIsAchieved) {
        return true;
      }
      if (limit) {
        return false;
      } else {
        return true;
      }
    }
    return false;
  }, [goal, limit, goalIsAchieved]);

  const showLimit = useMemo(() => {
    return limit && goalIsAchieved;
  }, [limit, goalIsAchieved]);

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

  function addOne() {
    changeValue(value + 1);
  }

  function removeOne() {
    changeValue(value - 1);
  }

  return (
    <Wrapper className={className} $success={goal && goalIsAchieved} $error={limitIsExceed}>
      <Text>{name}</Text>
      <GoalWrapper>
        <GoalText value={value} goal={goal} limit={limit} />
        <ButtonWrapper>
          <IconButtonWrapper>
            <IconButton disabled={value < 1} onClick={removeOne}>
              <Icons type="Minus" />
            </IconButton>
            <Strong>{value}</Strong>
            <IconButton disabled={limitIsExceed} onClick={addOne}>
              <Icons type="Plus" />
            </IconButton>
          </IconButtonWrapper>
          <Button variation="error" onClick={deleteListItem}>
            {enableDeletion ? 'Sure?' : 'Delete'}
          </Button>
        </ButtonWrapper>
      </GoalWrapper>

      {showGoal && <Progress label={goalIsAchieved ? '🤩' : 'Goal'} value={value} total={goal} />}
      {showLimit && (
        <Progress
          label={limitIsExceed ? '0 available' : `${limit - value} available`}
          value={value}
          total={limit}
          error
        />
      )}
    </Wrapper>
  );
};

Counter.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    goal: PropTypes.number,
    limit: PropTypes.number,
  }).isRequired,
};

Counter.defaultProps = {
  className: '',
};

export default Counter;
