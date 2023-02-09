import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PageWrapper from '../../components/layout/PageWrapper';
import Description from '../../components/typography/Description';
import Title from '../../components/typography/Title';
import _Button from '../../components/ui/Button';
import _Input from '../../components/ui/Input';
import { AppContext } from '../../state/Context';

const Input = styled(_Input)`
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: ${({ theme: { spacing } }) => spacing.large};
`;

const Button = styled(_Button)`
  width: 50%;
`;

const AddNewCounter = () => {
  const navigate = useNavigate();
  const { addNewCounter } = useContext(AppContext);
  const [name, setName] = useState('');
  const [goal, setGoal] = useState();

  function goToHome() {
    navigate('/');
  }

  function onNameChange({ target }) {
    setName(target.value);
  }

  function onGoalChange({ target }) {
    const { value } = target;

    if (!value) {
      setGoal();
      return;
    }

    if (value.match(/^-?\d+$/) && value < 100000000) {
      setGoal(Math.abs(target.value));
    }
  }

  function save() {
    addNewCounter({
      id: `${new Date().valueOf()}`,
      name,
      goal,
      value: 0,
    });
    goToHome();
  }

  return (
    <PageWrapper>
      <Title>Add a new counter</Title>
      <Description>Use a friendly name for the counter, e.g. "Cups of water".</Description>
      <Input label="Counter name" value={name} onChange={onNameChange} />
      <Description>Optionally add a goal to keep you motivated!</Description>
      <Input label="Counter goal" inputMode="numeric" value={goal} onChange={onGoalChange} />
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
