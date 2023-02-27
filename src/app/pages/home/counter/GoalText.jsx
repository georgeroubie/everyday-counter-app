/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: ${({ theme: { spacing } }) => spacing.normal};
  grid-row-gap: ${({ theme: { spacing } }) => spacing.small};
  width: max-content;
`;

const Description = styled.span`
  display: inline-block;

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.3;
    `}

  &::before {
    content: '';
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: ${({ theme: { shapes } }) => shapes.circle};
    margin-right: ${({ theme: { spacing } }) => spacing.normal};

    ${({ $type }) =>
      $type === 'goal' &&
      css`
        background-color: ${({ theme: { colors } }) => colors.successPrimary};
      `}

    ${({ $type }) =>
      $type === 'limit' &&
      css`
        background-color: ${({ theme: { colors } }) => colors.warningPrimary};
      `}
  }
`;

const Empty = styled.span``;

const Value = styled.span`
  display: inline-block;

  ${({ $completed }) =>
    $completed &&
    css`
      &::after {
        content: '✓';
        display: inline-block;
        margin-left: ${({ theme: { spacing } }) => spacing.small};
      }
    `}

  ${({ $type }) =>
    $type === 'goal' &&
    css`
      &::after {
        color: ${({ theme: { colors } }) => colors.successPrimary};
      }
    `}

  ${({ $type }) =>
    $type === 'limit' &&
    css`
      &::after {
        color: ${({ theme: { colors } }) => colors.warningPrimary};
      }
    `}
`;

const GoalText = ({ value, goal, limit }) => {
  const hasGoal = Boolean(goal);
  const hasLimit = Boolean(limit);
  const goalIsAchieved = hasGoal && value >= goal;
  const limitIsExceed = limit && value >= limit;

  return (
    <Wrapper>
      <Description $type="goal" $disabled={!hasGoal}>
        Goal:
      </Description>
      {hasGoal ? (
        <Value $type="goal" $completed={goalIsAchieved}>
          {value}/{goal}
        </Value>
      ) : (
        <Empty />
      )}
      <Description $type="limit" $disabled={!hasLimit}>
        Limit:
      </Description>
      {hasLimit ? (
        <Value $type="limit" $completed={limitIsExceed}>
          {value}/{limit}
        </Value>
      ) : (
        <Empty />
      )}
    </Wrapper>
  );
};

GoalText.propTypes = {
  value: PropTypes.number.isRequired,
  goal: PropTypes.number,
  limit: PropTypes.number,
};

GoalText.defaultProps = {
  goal: undefined,
  limit: undefined,
};

export default GoalText;
