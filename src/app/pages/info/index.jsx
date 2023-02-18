import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import _Icons from '../../components/icons/Icons';
import _BottomArea from '../../components/layout/BottomArea';
import PageWrapper from '../../components/layout/PageWrapper';
import Description from '../../components/typography/Description';
import Hyperlink from '../../components/typography/Hyperlink';
import Subtitle from '../../components/typography/Subtitle';
import _Title from '../../components/typography/Title';
import _Checkbox from '../../components/ui/Checkbox';
import Donation from '../../components/ui/Donation';
import { AppContext } from '../../state/Context';
import { DARK_THEME_KEY } from '../../theme/themes/dark';
import { LIGHT_THEME_KEY } from '../../theme/themes/light';

const Checkbox = styled(_Checkbox)`
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
`;

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

const BottomArea = styled(_BottomArea)`
  padding-top: ${({ theme: { spacing } }) => spacing.normal};
  padding-bottom: ${({ theme: { spacing } }) => spacing.normal};
  height: 76px;
`;

const Info = () => {
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
        <Title>Info</Title>
      </TitleWrapper>
      <Subtitle>Theme</Subtitle>
      <Checkbox label="Dark theme" checked={theme === DARK_THEME_KEY} onChange={handleOnChange} />
      <Subtitle>About</Subtitle>
      <Description>
        Everyday counter app, helps you count things, keeps you motivated, and enables you to stop your bad habits.
      </Description>
      <Subtitle>Privacy</Subtitle>
      <Description>Everyday counter web application does not use any kind of cookies or tracking.</Description>
      <Subtitle>Data</Subtitle>
      <Description>
        All the data are saved locally in your device. If you clear the browser cache all your counters will be deleted.
      </Description>
      <Subtitle>Code</Subtitle>
      <Description>
        You can find the code of this web application on my GitHub page. If you like it give the repository a star
        on&nbsp;
        <Hyperlink href="https://github.com/georgeroubie/everyday-counter" target="_blank" rel="noreferrer">
          GitHub
        </Hyperlink>
        .
      </Description>
      <Subtitle>Creator</Subtitle>
      <Description>
        My name is George Roubie and you can follow me on&nbsp;
        <Hyperlink href="https://www.linkedin.com/in/georgeroubie" target="_blank" rel="noreferrer">
          LinkedIn
        </Hyperlink>
        ,&nbsp;
        <Hyperlink href="https://george-roubie.medium.com" target="_blank" rel="noreferrer">
          Medium
        </Hyperlink>
        ,&nbsp;
        <Hyperlink href="https://codepen.io/georgeroubie" target="_blank" rel="noreferrer">
          Codepen
        </Hyperlink>
        &nbsp;and&nbsp;
        <Hyperlink href="https://github.com/georgeroubie" target="_blank" rel="noreferrer">
          GitHub
        </Hyperlink>
        .
      </Description>
      <BottomArea>
        <Donation />
      </BottomArea>
    </PageWrapper>
  );
};

export default Info;
