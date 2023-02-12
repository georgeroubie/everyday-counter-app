import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PageWrapper from '../../components/layout/PageWrapper';
import Description from '../../components/typography/Description';
import _Title from '../../components/typography/Title';
import _Button from '../../components/ui/Button';
import { AppContext } from '../../state/Context';
import ListItem from './ListItem';

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
  gap: ${({ theme: { spacing } }) => spacing.large};
`;

const Title = styled(_Title)`
  margin-bottom: 0;
`;

const Button = styled(_Button)`
  width: auto;
  flex-shrink: 0;
`;

const Home = () => {
  const { state } = useContext(AppContext);
  const { list } = state;
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <TitleWrapper>
        <Title>Counters</Title>
        <Button size="large" onClick={() => navigate('/add-new-counter')}>
          Add new
        </Button>
      </TitleWrapper>
      {Boolean(list.length) ? (
        list.map((listItem) => <ListItem key={listItem.id} data={listItem} />)
      ) : (
        <>
          <Description>Right now there are no counters, click the "Add new" button to create one.</Description>
          <Description>
            Everyday counter web application, helps you count things, e.g. how many cups of water you are drinking.
          </Description>
          <Description>Also helps you stop your bad habits, e.g. track how much you smoke every day.</Description>
          <Description>You can use it for whatever you need to track.</Description>
        </>
      )}
    </PageWrapper>
  );
};

export default Home;
