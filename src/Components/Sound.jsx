import useSound from "use-sound";

import win from "../Sound/win.mp3";
import lose from "../Sound/lose.mp3";
import play from "../Sound/play.mp3";

const Sound = (props) => {
  const { showState, showCorrect, correctAnswer, selected, playSoundResult } =
    props;

  const [playS] = useSound(play, {
    volume: 0.1,
  });
  const [winS] = useSound(win, {
    volume: 0.1,
  });
  const [loseS] = useSound(lose, {
    volume: 0.1,
  });

  if (showState === 0) playS();

  if (playSoundResult && showCorrect && correctAnswer === selected) winS();
  else if (playSoundResult && showCorrect && correctAnswer !== selected)
    loseS();

  return <div></div>;
};

export default Sound;
