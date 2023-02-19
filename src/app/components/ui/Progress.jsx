import PropTypes from 'prop-types';
import { useMemo } from 'react';
import styled, { css } from 'styled-components';

const CIRCLE_TOTAL = 570;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

const Label = styled.strong`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Svg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const DarkCircleSvg = styled(Svg)`
  z-index: 1;
`;

const Circle = styled.circle`
  fill: transparent;
  stroke-dasharray: ${CIRCLE_TOTAL};
  stroke-dashoffset: 0;
  stroke-width: 14px;
`;

const DarkCircle = styled(Circle)`
  transform: rotate(-90deg);
  transform-origin: center;
  stroke: ${({ theme: { colors } }) => colors.successPrimary};

  ${({ $error }) =>
    $error &&
    css`
      stroke: ${({ theme: { colors } }) => colors.errorPrimary};
    `}
`;

const LightCircleSvg = styled(Svg)`
  z-index: 0;
`;

const LightCircle = styled(Circle)`
  stroke: ${({ theme: { colors } }) => colors.successSecondary};

  ${({ $error }) =>
    $error &&
    css`
      stroke: ${({ theme: { colors } }) => colors.errorSecondary};
    `}
`;

const Progress = (props) => {
  const { className, label, value, total, error } = props;

  const dashoffset = useMemo(() => {
    if (value >= total) {
      return 0;
    }

    if (value === 0) {
      return CIRCLE_TOTAL;
    }

    return CIRCLE_TOTAL - (value * CIRCLE_TOTAL) / total;
  }, [value, total]);

  return (
    <Wrapper className={className}>
      <Label>{label}</Label>
      <LightCircleSvg width="200" height="200" viewport="0 0 100 100">
        <LightCircle $error={error} r="90" cx="100" cy="100" />
      </LightCircleSvg>
      <DarkCircleSvg width="200" height="200" viewport="0 0 100 100">
        <DarkCircle
          $error={error}
          r="90"
          cx="100"
          cy="100"
          style={{
            strokeDashoffset: `${dashoffset}px`,
          }}
        />
      </DarkCircleSvg>
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
