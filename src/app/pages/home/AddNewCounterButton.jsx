import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import _Button from '../../components/ui/Button';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  padding: ${({ theme: { spacing } }) => spacing.large};
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.background};
`;

const Button = styled(_Button)`
  max-width: 960px;
  margin: 0 auto;
`;

const AddNewCounterButton = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Button size="large" onClick={() => navigate('/add-new-counter')}>
        Add new
      </Button>
    </Wrapper>
  );
};

export default AddNewCounterButton;
