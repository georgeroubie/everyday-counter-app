import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  border-radius: ${({ theme: { shapes } }) => shapes.rounded};
  background-color: ${({ theme: { colors } }) => colors.surface};
  width: 100%;
  height: 0.7rem;
  display: flex;
  overflow: hidden;
  position: relative;

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.3;
    `}
`;

const ProgressWrapper = styled.div`
  width: ${({ $width }) => `${$width}%`};
  overflow: hidden;
`;

const LimitProgressWrapper = styled(ProgressWrapper)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
`;

const ProgressBar = styled.div`
  width: ${({ $width }) => `${$width}%`};
  height: 0.7rem;
`;

const GoalProgressBar = styled(ProgressBar)`
  background-color: ${({ theme: { colors } }) => colors.successPrimary};
  position: relative;
  z-index: 1;
`;

const LimitProgressBar = styled(ProgressBar)`
  background-color: ${({ theme: { colors } }) => colors.warningPrimary};
`;

const GoalProgress = ({ value, goal, limit }) => {
  const hasGoal = Boolean(goal);
  const hasLimit = Boolean(limit);

  if (!hasGoal && !hasLimit) {
    return <Wrapper $disabled />;
  }

  const goalProgressWrapperWidth = !hasLimit ? 100 : (100 * goal) / limit;

  const goalProgressWidth = hasGoal ? (100 * value) / goal : 0;
  const limitProgressWidth = !hasGoal ? (100 * value) / limit : goalProgressWidth > 100 ? (100 * value) / limit : 0;

  return (
    <Wrapper>
      {hasGoal && (
        <ProgressWrapper $width={goalProgressWrapperWidth}>
          <GoalProgressBar $width={goalProgressWidth} />
        </ProgressWrapper>
      )}
      {hasLimit && (
        <LimitProgressWrapper $width="100">
          <LimitProgressBar $width={limitProgressWidth} />
        </LimitProgressWrapper>
      )}
    </Wrapper>
  );
};

GoalProgress.propTypes = {
  value: PropTypes.number.isRequired,
  goal: PropTypes.number,
  limit: PropTypes.number,
};

GoalProgress.defaultProps = {
  goal: undefined,
  limit: undefined,
};

export default GoalProgress;
