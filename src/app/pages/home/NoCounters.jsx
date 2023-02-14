import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Icons from '../../components/icons/Icons';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: ${({ theme: { colors, shapes } }) => `${shapes.divider} solid ${colors.borderPrimary}`};
  width: 160px;
  height: 160px;
  border-radius: ${({ theme: { shapes } }) => shapes.circle};
  cursor: pointer;
`;

const NoCounters = () => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate('/add-new-counter')}>
      <Icons type="Plus" width="40px" />
    </Wrapper>
  );
};

export default NoCounters;
