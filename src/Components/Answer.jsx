const Answer = (props) => {
  const getLetter = (num) => {
    switch (num) {
      case 1:
        return "A";
      case 2:
        return "B";
      case 3:
        return "C";
      case 4:
        return "D";
      default:
        return;
    }
  };

  const { answer, answerNum, answerProps } = props;

  const {
    showState,
    selected,
    correctAnswer,
    showCorrect,
    fiftyUsed,
    fiftyUsedThisQ,
    half,
  } = answerProps;

  const answerClassLeft = "grid-element-border answer answer-left-col ";
  const answerClassRight = "grid-element-border answer answer-right-col ";

  return (
    <div
      tabIndex="0"
      onClick={(e) => props.onClick(answerNum)}
      className={
        "grid-element" +
        (fiftyUsed && fiftyUsedThisQ && half[answerNum - 1] ? " hide" : "") +
        (showState >= answerNum + 1 ? " show" : " hide")
      }
    >
      <div
        className={
          (answerNum % 2 === 0 ? answerClassRight : answerClassLeft) +
          (selected === answerNum
            ? answerNum % 2 === 0
              ? " answer-selected-right"
              : " answer-selected-left"
            : "") +
          (correctAnswer === answerNum && showCorrect
            ? answerNum % 2 === 0
              ? " answer-correct-right"
              : " answer-correct-left"
            : "")
        }
      >
        <h3>
          <span className="diamond">&#9670;</span>
          <span className="answer-letter">{getLetter(answerNum)}: </span>
          <span className="answer-text">{answer}</span>
        </h3>
      </div>
    </div>
  );
};

export default Answer;
