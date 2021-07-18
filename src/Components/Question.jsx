const Question = (props) => {
  const { currentQ, showState } = props;
  return (
    <div
      className={
        "grid-element grid-element-border question " +
        (showState >= 1 ? "show" : "hide")
      }
    >
      <h3>{currentQ}</h3>
    </div>
  );
};

export default Question;
