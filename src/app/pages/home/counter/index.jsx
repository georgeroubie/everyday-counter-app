import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import _Icons from '../../../components/icons/Icons';
import { AppContext } from '../../../state/Context';
import GoalProgress from './GoalProgress';
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

const Text = styled.span`
  cursor: pointer;
  font-size: ${({ theme: { fontSize } }) => fontSize.large};
  display: flex;
  gap: ${({ theme: { spacing } }) => spacing.normal};
  align-items: center;
`;

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

const Icons = styled(_Icons)`
  color: ${({ theme: { colors } }) => colors.buttonSecondaryText};
  width: 0.9rem;
  flex-shrink: 0;
`;

const Edit = styled(_Icons)`
  color: ${({ theme: { colors } }) => colors.textPrimary};
  width: 0.5rem;
`;

const Counter = ({ className, data }) => {
  const navigate = useNavigate();
  const { id, name, value, goal, limit } = data;
  const { state, updateCounters } = useContext(AppContext);
  const { list } = state;
  const limitIsExceed = limit ? value >= limit : false;

  function goToEdit() {
    navigate(`/edit-counter/${id}`);
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
    <Wrapper className={className}>
      <Text onClick={goToEdit}>
        {name}
        <Edit type="AngleRight" />
      </Text>
      <GoalWrapper>
        <GoalText value={value} goal={goal} limit={limit} />
        <IconButtonWrapper>
          <IconButton disabled={value < 1} onClick={removeOne}>
            <Icons type="Minus" />
          </IconButton>
          <Strong>{value}</Strong>
          <IconButton disabled={limitIsExceed} onClick={addOne}>
            <Icons type="Plus" />
          </IconButton>
        </IconButtonWrapper>
      </GoalWrapper>
      <GoalProgress value={value} goal={goal} limit={limit} />
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
