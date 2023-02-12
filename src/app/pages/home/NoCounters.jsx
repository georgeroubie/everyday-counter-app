import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Icons from '../../components/icons/Icons';
import Description from '../../components/typography/Description';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme: { spacing } }) => spacing.xlarge} auto;
  border: ${({ theme: { colors, shapes } }) => `${shapes.divider} solid ${colors.borderPrimary}`};
  width: 250px;
  height: 250px;
  border-radius: ${({ theme: { shapes } }) => shapes.circle};
  cursor: pointer;
`;

const NoCounters = () => {
  const navigate = useNavigate();

  return (
    <>
      <Description>Right now there are no counters, click the "Add new" button to create one.</Description>
      <Description>
        Everyday counter web application, helps you count things, e.g. how many cups of water you are drinking.
      </Description>
      <Description>Also helps you stop your bad habits, e.g. track how much you smoke every day.</Description>
      <Description>You can use it for whatever you need to track.</Description>
      <Wrapper onClick={() => navigate('/add-new-counter')}>
        <Icons type="Plus" width="70px" />
      </Wrapper>
    </>
  );
};

export default NoCounters;
