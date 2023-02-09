import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import _Icons from '../../components/icons/Icons';
import PageWrapper from '../../components/layout/PageWrapper';
import _Title from '../../components/typography/Title';
import Checkbox from '../../components/ui/Checkbox';
import { AppContext } from '../../state/Context';
import { DARK_THEME_KEY } from '../../theme/themes/dark';
import { LIGHT_THEME_KEY } from '../../theme/themes/light';

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing.normal};
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
  cursor: pointer;
`;

const Title = styled(_Title)`
  margin-bottom: 0;
`;

const Icons = styled(_Icons)`
  width: 1.5rem;
  height: 2.5rem;
`;

const Settings = () => {
  const { state, setTheme } = useContext(AppContext);
  const { theme } = state;
  const navigate = useNavigate();

  function handleOnChange(checked) {
    setTheme(checked ? DARK_THEME_KEY : LIGHT_THEME_KEY);
  }

  return (
    <PageWrapper>
      <TitleWrapper onClick={() => navigate('/')}>
        <Icons type="AngleLeft" />
        <Title>Settings</Title>
      </TitleWrapper>

      <Checkbox label="Dark theme" checked={theme === DARK_THEME_KEY} onChange={handleOnChange} />
    </PageWrapper>
  );
};

export default Settings;
