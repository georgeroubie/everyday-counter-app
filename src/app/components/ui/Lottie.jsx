import LottiePlayer from 'lottie-web';
import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const LottieStyled = styled.div`
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  ${({ $centered }) =>
    $centered &&
    css`
      margin: auto;
    `}
`;

const Lottie = (props) => {
  const {
    className,
    url,
    speed,
    width,
    height,
    centered = false,
    loop = true,
    autoplay = true,
    player,
    onPlay,
    onComplete,
  } = props;

  const ref = useRef(null);
  const lottie = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoplay);

  function onClick() {
    if (isPlaying) {
      return;
    }

    lottie.current.goToAndPlay(0);
    setIsPlaying(true);
    onPlay?.();
  }

  useEffect(() => {
    lottie.current = LottiePlayer.loadAnimation({
      container: ref.current,
      renderer: 'svg',
      loop: loop,
      autoplay: autoplay,
      path: url,
    });

    lottie.current.onComplete = () => {
      setIsPlaying(false);
      onComplete?.();
    };

    if (speed) {
      lottie.current.setSpeed(speed);
    }

    if (player) {
      player.current = lottie.current;
    }

    return () => lottie.current && lottie.current.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LottieStyled
      ref={ref}
      className={className}
      $centered={centered}
      $width={width}
      $height={height}
      onClick={onClick}
    />
  );
};

export default Lottie;
