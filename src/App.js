import React, { Component } from "react";
import Question from "./Components/Question";
import Answer from "./Components/Answer";
import Help from "./Components/Help";
import imgDefault from "./Imgs/default.png";
import img1 from "./Imgs/test.jpeg";
import img2 from "./Imgs/test1.jpg";
import "./CSS/App.css";
import * as data from "./Questions/Questions.json";

/* need img for: 14 */

class App extends Component {
  state = {
    questions: data.default,
    showState: 0,
    showCorrect: false,
    selected: null,
    currentQNum: 0,
    lastHelpQNum: -1,
    askHostUsed: false,
    askAudienceUsed: false,
    fiftyUsed: false,
    fiftyUsedThisQ: false,
    imgs: {
      img0: img1,
      img1001: img2,
    },
  };

  showElement() {
    this.setState({ showState: this.state.showState + 1 });
  }

  nextQuestion() {
    if (this.state.currentQNum + 1 >= this.state.questions.length) return;

    this.setState({
      showState: 0,
    });
    const timer = setTimeout(() => {
      this.setState({
        currentQNum: this.state.currentQNum + 1,
        showCorrect: false,
        selected: null,
        fiftyUsedThisQ: false,
      });
    }, 503);
    return () => clearTimeout(timer);
  }

  previousQuestion() {
    if (this.state.currentQNum - 1 < 0) return;

    this.setState({
      currentQNum: this.state.currentQNum - 1,
      showState: 5,
      showCorrect: true,
      selected: null,
      fiftyUsedThisQ: false,
    });
  }

  showCorrect() {
    if (this.state.selected !== null) {
      this.setState({ showCorrect: true });
    }
  }

  selectAnswer(key) {
    if (key !== "1" && key !== "2" && key !== "3" && key !== "4") return;

    const { showState, showCorrect } = this.state;
    if (showState >= 5 && !showCorrect)
      this.setState({ selected: parseInt(key) });
  }

  keyPressHandler = (e) => {
    switch (e.key) {
      case "s":
        this.showElement();
        return;
      case "n":
        this.nextQuestion();
        return;
      case "b":
        this.previousQuestion();
        return;
      case "c":
        this.showCorrect();
        return;
      default:
        this.selectAnswer(e.key);
        return;
    }
  };

  selectClickHandler = (i) => {
    const { showState, showCorrect } = this.state;
    if (showState >= 5 && !showCorrect) this.setState({ selected: i });
  };

  helpClickHandler = (helpElement) => {
    const {
      lastHelpQNum,
      currentQNum,
      showState,
      askAudienceUsed,
      askHostUsed,
      fiftyUsed,
    } = this.state;

    if (showState < 5 || lastHelpQNum === currentQNum) return;

    this.setState({ lastHelpQNum: currentQNum });

    switch (helpElement) {
      case "askAudience":
        if (!askAudienceUsed) this.setState({ askAudienceUsed: true });
        return;
      case "askHost":
        if (!askHostUsed) this.setState({ askHostUsed: true });
        return;
      case "fifty":
        if (!fiftyUsed)
          this.setState({ fiftyUsed: true, fiftyUsedThisQ: true });
        return;
      default:
        return;
    }
  };

  componentDidUpdate() {
    this._container.focus();
  }

  componentDidMount() {
    this._container.focus();
  }

  render() {
    const {
      questions,
      currentQNum,
      selected,
      showCorrect,
      imgs,
      showState,
      askAudienceUsed,
      askHostUsed,
      fiftyUsed,
      fiftyUsedThisQ,
    } = this.state;
    const currentQ = questions[currentQNum].question;
    const answer1 = questions[currentQNum].answer1;
    const answer2 = questions[currentQNum].answer2;
    const answer3 = questions[currentQNum].answer3;
    const answer4 = questions[currentQNum].answer4;
    const correctAnswer = questions[currentQNum].correctAnswer;
    const fiftyArr = questions[currentQNum].half;
    const image = imgs["img" + currentQNum]
      ? imgs["img" + currentQNum]
      : imgs["img" + (currentQNum - 1)];

    const answerProps = {
      fiftyUsed: fiftyUsed,
      fiftyUsedThisQ: fiftyUsedThisQ,
      fiftyArr: fiftyArr,
      showState: showState,
      selected: selected,
      correctAnswer: correctAnswer,
      showCorrect: showCorrect,
    };

    return (
      <div
        id="container"
        tabIndex="0"
        onKeyDown={this.keyPressHandler}
        autofocus
        ref={(c) => (this._container = c)}
      >
        <div className="app">
          {/* <h1 className="temph1">{currentQNum}</h1> */}
          <div
            className={
              "img-container " + (imgs["img" + currentQNum] ? "show" : "hide")
            }
          >
            <img alt="for question" src={image} />
          </div>

          <div className="grid">
            <svg>
              <line x1="0" y1="0" x2="100%" y2="0"></line>
            </svg>

            <Question showState={showState} currentQ={currentQ} />

            <svg>
              <line x1="0" y1="0" x2="100%" y2="0"></line>
            </svg>

            <Answer
              onClick={this.selectClickHandler}
              answerProps={answerProps}
              answer={answer1}
              answerNum={1}
            />

            <Answer
              onClick={this.selectClickHandler}
              answerProps={answerProps}
              answer={answer2}
              answerNum={2}
            />

            <svg>
              <line x1="0" y1="0" x2="100%" y2="0"></line>
            </svg>

            <Answer
              onClick={this.selectClickHandler}
              answerProps={answerProps}
              answer={answer3}
              answerNum={3}
            />

            <Answer
              onClick={this.selectClickHandler}
              answerProps={answerProps}
              answer={answer4}
              answerNum={4}
            />

            <Help
              askAudienceUsed={askAudienceUsed}
              askHostUsed={askHostUsed}
              fiftyUsed={fiftyUsed}
              onClick={this.helpClickHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
