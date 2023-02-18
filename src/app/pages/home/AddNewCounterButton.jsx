import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BottomArea from '../../components/layout/BottomArea';
import _Button from '../../components/ui/Button';

const Button = styled(_Button)``;

const AddNewCounterButton = () => {
  const navigate = useNavigate();

  return (
    <BottomArea>
      <Button size="large" onClick={() => navigate('/add-new-counter')}>
        Add new
      </Button>
    </BottomArea>
  );
};

export default AddNewCounterButton;
