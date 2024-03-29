import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BottomArea from '../../components/layout/BottomArea';
import _Button from '../../components/ui/Button';
import Checkbox from '../../components/ui/Checkbox';
import _Input from '../../components/ui/Input';

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

const CounterForm = ({ initialData, onSave }) => {
  const navigate = useNavigate();
  const [name, setName] = useState(initialData.name);
  const [goal, setGoal] = useState(initialData.goal);
  const [limit, setLimit] = useState(initialData.limit);
  const [showLimitErrorMessage, setShowLimitErrorMessage] = useState(false);
  const [reset, setReset] = useState(initialData.reset);

  useEffect(() => {
    if (!goal || !limit) {
      setShowLimitErrorMessage(false);
    }
  }, [goal, limit]);

  function goToHome() {
    navigate('/');
  }

  function isValidValue(value) {
    return value.match(/^-?\d+$/) && value < 100000000;
  }

  function saveValue(value, setValue) {
    setValue(Math.abs(value));
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
      const hasError = Boolean(goal && value < goal);
      setShowLimitErrorMessage(hasError);
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
      const hasError = Boolean(limit && value > limit);
      setShowLimitErrorMessage(hasError);
      saveValue(value, setGoal);
    }
  }

  function save() {
    const now = new Date();
    const day = now.getDate();
    const id = initialData.id || `${now.valueOf()}`;
    const value = initialData.value || 0;

    onSave({ id, name, goal, limit, value, reset, day });
  }

  return (
    <>
      <Input label="*Name" value={name} onChange={onNameChange} />
      <Input label="Goal" inputMode="numeric" value={goal} onChange={onGoalChange} />
      <Input label="Limit" inputMode="numeric" value={limit} onChange={onLimitChange} />
      {showLimitErrorMessage && <ErrorMessage>Limit must be bigger than goal</ErrorMessage>}
      <Checkbox label="Reset at midnight" checked={reset} onChange={setReset} />
      <BottomArea>
        <ButtonWrapper>
          <Button variation="secondary" size="large" onClick={goToHome}>
            CANCEL
          </Button>
          <Button size="large" disabled={!name || showLimitErrorMessage} onClick={save}>
            SAVE
          </Button>
        </ButtonWrapper>
      </BottomArea>
    </>
  );
};

CounterForm.propTypes = {
  initialData: PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.number,
    name: PropTypes.string,
    goal: PropTypes.number,
    limit: PropTypes.number,
    reset: PropTypes.bool,
  }),
  onSave: PropTypes.func.isRequired,
};

CounterForm.defaultProps = {
  initialData: {
    id: undefined,
    value: undefined,
    name: '',
    goal: undefined,
    limit: undefined,
    reset: false,
  },
};

export default CounterForm;
