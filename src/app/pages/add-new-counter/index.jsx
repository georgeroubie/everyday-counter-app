import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PageWrapper from '../../components/layout/PageWrapper';
import Title from '../../components/typography/Title';
import _Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { AppContext } from '../../state/Context';

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: ${({ theme: { spacing } }) => spacing.large};
  gap: ${({ theme: { spacing } }) => spacing.large};
`;

const Button = styled(_Button)`
  width: 50%;
`;

const AddNewCounter = () => {
  const navigate = useNavigate();
  const { addNewCounter } = useContext(AppContext);
  const [name, setName] = useState('');

  function goToHome() {
    navigate('/');
  }

  function handleOnChange({ target }) {
    setName(target.value);
  }

  function save() {
    addNewCounter({
      id: `${new Date().valueOf()}`,
      name,
      value: 0,
    });
    goToHome();
  }

  return (
    <PageWrapper>
      <Title>Add new counter</Title>
      <Input label="Counter name" value={name} onChange={handleOnChange} />
      <ButtonWrapper>
        <Button variation="secondary" size="large" onClick={goToHome}>
          CANCEL
        </Button>
        <Button size="large" disabled={!name} onClick={save}>
          SAVE
        </Button>
      </ButtonWrapper>
    </PageWrapper>
  );
};

export default AddNewCounter;
