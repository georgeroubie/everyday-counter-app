import { NavLink as _NavLink } from 'react-router-dom';
import styled from 'styled-components';
import _Icons from '../components/icons/Icons';

const Wrapper = styled.nav`
  position: fixed;
  bottom: ${({ theme: { spacing } }) => spacing.large};
  right: ${({ theme: { spacing } }) => spacing.large};
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

const Menu = () => {
  return (
    <Wrapper>
      <NavLink to="/settings" end>
        <Icons type="Gear" />
      </NavLink>
    </Wrapper>
  );
};

export default Menu;
