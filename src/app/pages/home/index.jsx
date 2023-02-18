import { NavLink as _NavLink } from 'react-router-dom';
import styled from 'styled-components';
import _Icons from '../../components/icons/Icons';
import PageWrapper from '../../components/layout/PageWrapper';
import _Title from '../../components/typography/Title';
import AddNewCounterButton from './AddNewCounterButton';
import CounterList from './CounterList';

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

const NavLink = styled(_NavLink)`
  text-decoration: none;
  padding: ${({ theme: { spacing } }) => spacing.normal};
  background-color: ${({ theme: { colors } }) => colors.background};
  display: inline-block;
  border-radius: ${({ theme: { shapes } }) => shapes.circle};
  width: 3rem;
  height: 3rem;
`;

const Icons = styled(_Icons)`
  color: ${({ theme: { colors } }) => colors.textPrimary};
`;

const Home = () => {
  return (
    <PageWrapper>
      <TitleWrapper>
        <Title>My counters</Title>
        <NavLink to="/info" end>
          <Icons type="Gear" />
        </NavLink>
      </TitleWrapper>
      <CounterList />
      <AddNewCounterButton />
    </PageWrapper>
  );
};

export default Home;
