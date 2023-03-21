import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import PageWrapper from '../../components/layout/PageWrapper';
import _Title from '../../components/typography/Title';
import _Button from '../../components/ui/Button';
import CounterForm from '../../components/ui/CounterForm';
import { AppContext } from '../../state/Context';

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: ${({ theme: { spacing } }) => spacing.normal};
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
`;

const Title = styled(_Title)`
  margin-bottom: 0;
`;

const Button = styled(_Button)`
  width: 5rem;
`;

const EditCounter = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const { updateCounters, state } = useContext(AppContext);
  const { list } = state;
  const [enableDeletion, setEnableDeletion] = useState(false);

  const initialData = list.find((listItem) => listItem.id === id);

  function deleteListItem() {
    if (!enableDeletion) {
      setEnableDeletion(true);
      return;
    }

    const updatedList = list.filter((listItem) => listItem.id !== id);
    updateCounters(updatedList);
    goToHome();
  }

  function goToHome() {
    navigate('/');
  }

  function updateCounter(newCounterData) {
    const updatedList = list.map((listItem) => {
      if (listItem.id === newCounterData.id) {
        return newCounterData;
      }
      return listItem;
    });
    updateCounters(updatedList);
    goToHome();
  }

  if (!initialData) {
    return (
      <PageWrapper>
        <TitleWrapper>
          <Title onBack={goToHome}>Edit counter</Title>
        </TitleWrapper>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <TitleWrapper>
        <Title onBack={goToHome}>Edit counter</Title>
        <Button variation="error" onClick={deleteListItem}>
          {enableDeletion ? 'Sure?' : 'Delete'}
        </Button>
      </TitleWrapper>
      <CounterForm initialData={initialData} onSave={updateCounter} />
    </PageWrapper>
  );
};

export default EditCounter;
