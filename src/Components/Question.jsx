const Question = (props) => {
  const { question, showState } = props;

  return (
    <div
      className={
        "grid-element grid-element-border question " +
        (showState >= 1 ? "show" : "hide")
      }
    >
      <h3>{question}</h3>
    </div>
  );
};

export default Question;
