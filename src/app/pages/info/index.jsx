import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BottomArea from '../../components/layout/BottomArea';
import PageWrapper from '../../components/layout/PageWrapper';
import Hyperlink from '../../components/typography/Hyperlink';
import Subtitle from '../../components/typography/Subtitle';
import Title from '../../components/typography/Title';
import Checkbox from '../../components/ui/Checkbox';
import Donation from '../../components/ui/Donation';
import { AppContext } from '../../state/Context';
import { DARK_THEME_KEY } from '../../theme/themes/dark';
import { LIGHT_THEME_KEY } from '../../theme/themes/light';

const Card = styled.div`
  background: ${({ theme: { colors } }) => colors.backgroundSecondary};
  padding: ${({ theme: { spacing } }) => spacing.large};
  border-radius: ${({ theme: { shapes } }) => shapes.rounded};
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
`;

const Text = styled.div``;

const Info = () => {
  const { state, setTheme } = useContext(AppContext);
  const { theme } = state;
  const navigate = useNavigate();

  function handleOnChange(checked) {
    setTheme(checked ? DARK_THEME_KEY : LIGHT_THEME_KEY);
  }

  function goToHome() {
    navigate('/');
  }

  return (
    <PageWrapper>
      <Title onBack={goToHome}>Info</Title>
      <Card>
        <Subtitle>Theme</Subtitle>
        <Checkbox label="Dark UI" checked={theme === DARK_THEME_KEY} onChange={handleOnChange} />
      </Card>
      <Card>
        <Subtitle>About</Subtitle>
        <Text>
          Everyday counter app, helps you count things, keeps you motivated, and enables you to stop your bad habits.
        </Text>
      </Card>
      <Card>
        <Subtitle>Privacy</Subtitle>
        <Text>Everyday counter app does not use any kind of cookies or tracking.</Text>
      </Card>
      <Card>
        <Subtitle>Data</Subtitle>
        <Text>
          All the data are saved locally in your device. If you clear the browser cache all your counters will be
          deleted.
        </Text>
      </Card>
      <Card>
        <Subtitle>Code</Subtitle>
        <Text>
          You can find the code of this web application on my GitHub page. If you like it give the repository a star
          on&nbsp;
          <Hyperlink href="https://github.com/georgeroubie/everyday-counter-app" target="_blank" rel="noreferrer">
            GitHub
          </Hyperlink>
          .
        </Text>
      </Card>
      <Card>
        <Subtitle>Creator</Subtitle>
        <Text>
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
        </Text>
      </Card>
      <BottomArea>
        <Donation />
      </BottomArea>
    </PageWrapper>
  );
};

export default Info;
