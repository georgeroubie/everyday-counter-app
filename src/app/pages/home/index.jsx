import { NavLink as _NavLink } from 'react-router-dom';
import styled from 'styled-components';
import _Icons from '../../components/icons/Icons';
import PageWrapper from '../../components/layout/PageWrapper';
import logo from './../../../assets/img/logo.svg';
import AddNewCounterButton from './AddNewCounterButton';
import CounterList from './CounterList';

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
  gap: ${({ theme: { spacing } }) => spacing.large};
  position: relative;
`;

const Image = styled.img``;

const NavLink = styled(_NavLink)`
  text-decoration: none;
  padding: ${({ theme: { spacing } }) => spacing.normal};
  background-color: ${({ theme: { colors } }) => colors.background};
  display: inline-block;
  border-radius: ${({ theme: { shapes } }) => shapes.circle};
  width: 2.3rem;
  height: 2.3rem;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    right: -100px;
  }
`;

const Icons = styled(_Icons)`
  color: ${({ theme: { colors } }) => colors.textPrimary};
`;

const Home = () => {
  return (
    <PageWrapper>
      <TitleWrapper>
        <Image src={logo} alt="Everyday counter app" />
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
