import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const CIRCLE_TOTAL = 570;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.strong`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Svg = styled.svg`
  position: relative;
`;

const Circle = styled.circle`
  fill: transparent;
  stroke-dasharray: ${CIRCLE_TOTAL};
  stroke-dashoffset: 0;
  stroke-width: 14px;
`;

const DarkCircle = styled(Circle)`
  stroke: ${({ theme: { colors } }) => colors.successPrimary};

  ${({ $error }) =>
    $error &&
    css`
      stroke: ${({ theme: { colors } }) => colors.errorPrimary};
    `}
`;

const LightCircle = styled(Circle)`
  transform: rotate(-90deg);
  transform-origin: center;
  stroke: ${({ theme: { colors } }) => colors.successSecondary};

  ${({ $error }) =>
    $error &&
    css`
      stroke: ${({ theme: { colors } }) => colors.errorSecondary};
    `}
`;

const Progress = (props) => {
  const { className, label, value, total, error } = props;
  const dashoffset = value >= total ? CIRCLE_TOTAL : (value * CIRCLE_TOTAL) / total;

  return (
    <Wrapper className={className}>
      <Label>{label}</Label>
      <Svg width="200" height="200" viewport="0 0 100 100">
        <DarkCircle $error={error} r="90" cx="100" cy="100" />
        <LightCircle
          $error={error}
          r="90"
          cx="100"
          cy="100"
          style={{
            strokeDashoffset: `-${dashoffset}px`,
          }}
        />
      </Svg>
    </Wrapper>
  );
};

Progress.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  error: PropTypes.bool,
};

Progress.defaultProps = {
  className: '',
  error: false,
};

export default Progress;
