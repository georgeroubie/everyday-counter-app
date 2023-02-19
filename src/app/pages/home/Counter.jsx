import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import _Icons from '../../components/icons/Icons';
import Subtitle from '../../components/typography/Subtitle';
import _Button from '../../components/ui/Button';
import Progress from '../../components/ui/Progress';
import { AppContext } from '../../state/Context';

const Wrapper = styled.div`
  padding: ${({ theme: { spacing } }) => spacing.large};
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
  border: ${({ theme: { colors, shapes } }) => `${shapes.divider} solid ${colors.borderPrimary}`};
  border-radius: ${({ theme: { shapes } }) => shapes.rounded};
  user-select: none;

  ${({ $success }) =>
    $success &&
    css`
      border-color: ${({ theme: { colors } }) => colors.successPrimary};
    `}

  ${({ $error }) =>
    $error &&
    css`
      border-color: ${({ theme: { colors } }) => colors.errorPrimary};
    `}
`;

const Strong = styled.strong``;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ theme: { spacing } }) => spacing.normal};
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
  background-color: ${({ theme: { colors } }) => colors.buttonSecondary};
  border-radius: ${({ theme: { shapes } }) => shapes.rounded};
  flex-shrink: 0;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled(_Button)`
  width: 5rem;
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
  const goalIsAchieved = value >= goal;
  const limitIsExceed = value >= limit;
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

  function addOne() {
    changeValue(value + 1);
  }

  function removeOne() {
    changeValue(value - 1);
  }

  return (
    <Wrapper className={className} $success={goalIsAchieved} $error={limitIsExceed}>
      <Subtitle>{name}</Subtitle>
      {goal && <Progress label={value >= goal ? '🤩' : 'Goal'} value={value} total={goal} />}
      {limit && (
        <span>
          Available: <Strong>{limitIsExceed ? '0' : `${limit - value}`}</Strong>
        </span>
      )}
      <ButtonWrapper>
        <Button variation="error" onClick={deleteListItem}>
          {enableDeletion ? 'Sure?' : 'Delete'}
        </Button>
        <IconButtonWrapper>
          <IconButton disabled={value < 1} onClick={removeOne}>
            <Icons type="Minus" />
          </IconButton>
          <Strong>{value}</Strong>
          <IconButton disabled={limitIsExceed} onClick={addOne}>
            <Icons type="Plus" />
          </IconButton>
        </IconButtonWrapper>
      </ButtonWrapper>
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
