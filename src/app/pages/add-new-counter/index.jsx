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

const ErrorMessage = styled.div`
  color: ${({ theme: { colors } }) => colors.errorPrimary};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  margin-top: -${({ theme: { spacing } }) => spacing.normal};
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
`;

const AddNewCounter = () => {
  const navigate = useNavigate();
  const { addNewCounter } = useContext(AppContext);
  const [name, setName] = useState('');
  const [goal, setGoal] = useState();
  const [limit, setLimit] = useState();
  const [showLimitErrorMessage, setShowLimitErrorMessage] = useState(false);

  function isValidValue(value) {
    return value.match(/^-?\d+$/) && value < 100000000;
  }

  function saveValue(value, setValue) {
    setValue(Math.abs(value));
  }

  function goToHome() {
    navigate('/');
  }

  function onNameChange({ target }) {
    setName(target.value);
  }

  function onLimitChange({ target }) {
    const { value } = target;

    if (!value) {
      setLimit();
      return;
    }

    if (isValidValue(value)) {
      if (goal && value < goal) {
        setShowLimitErrorMessage(true);
      } else {
        setShowLimitErrorMessage(false);
      }

      saveValue(value, setLimit);
    }
  }

  function onGoalChange({ target }) {
    const { value } = target;

    if (!value) {
      setGoal();
      return;
    }

    if (isValidValue(value)) {
      if (limit && value > limit) {
        setShowLimitErrorMessage(true);
      } else {
        setShowLimitErrorMessage(false);
      }
      saveValue(value, setGoal);
    }
  }

  function save() {
    addNewCounter({
      id: `${new Date().valueOf()}`,
      name,
      goal,
      limit,
      value: 0,
    });
    goToHome();
  }

  return (
    <PageWrapper>
      <Title>Add a new counter</Title>
      <Description>Use a friendly name for the counter, e.g. "Cups of water".</Description>
      <Input label="Counter name" value={name} onChange={onNameChange} />
      <Description>Add a goal to keep you motivated</Description>
      <Input label="Counter goal" inputMode="numeric" value={goal} onChange={onGoalChange} />
      <Description>Add a limit to help you control yourself</Description>
      <Input label="Counter limit" inputMode="numeric" value={limit} onChange={onLimitChange} />
      {showLimitErrorMessage && <ErrorMessage>Limit must be bigger than goal</ErrorMessage>}
      <ButtonWrapper>
        <Button variation="secondary" size="large" onClick={goToHome}>
          CANCEL
        </Button>
        <Button size="large" disabled={!name || showLimitErrorMessage} onClick={save}>
          SAVE
        </Button>
      </ButtonWrapper>
    </PageWrapper>
  );
};

export default AddNewCounter;
