import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../components/layout/PageWrapper';
import Title from '../../components/typography/Title';
import CounterForm from '../../components/ui/CounterForm';
import { AppContext } from '../../state/Context';

const AddNewCounter = () => {
  const navigate = useNavigate();
  const { addNewCounter } = useContext(AppContext);

  function goToHome() {
    navigate('/');
  }

  function saveCounter(counterData) {
    addNewCounter(counterData);
    goToHome();
  }

  return (
    <PageWrapper>
      <Title onBack={goToHome}>Add a new counter</Title>
      <CounterForm onSave={saveCounter} />
    </PageWrapper>
  );
};

export default AddNewCounter;
