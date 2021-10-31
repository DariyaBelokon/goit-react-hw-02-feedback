import './App.css';
import React from 'react';
import { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = e => {
    const newFeedback = e.target.name;
    this.setState(prevState => ({
      [newFeedback]: prevState[newFeedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    let total = 0;
    total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  countPositiveFeedbackPercentage = () =>
    (this.state.good / this.countTotalFeedback()) * 100;

  countNoFeedback = () =>
    this.state.good === 0 && this.state.neutral === 0 && this.state.bad === 0
      ? true
      : false;

  render() {
    const {
      onLeaveFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      countNoFeedback,
    } = this;
    const { good, neutral, bad } = this.state;
    const objKey = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={objKey} onLeaveFeedback={onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {countNoFeedback() ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;

// <button type="button" className="button__good" onClick={onLeaveFeedback}>
//   Good
// </button>
// <button type="button" className="button__neutral" onClick={onLeaveFeedback}>
//   Neutral
// </button>
// <button type="button" className="button__bad" onClick={onLeaveFeedback}>
//   Bad
// </button> *//

// handleIncrGood = () => { this.setState(prevState => ({
//     good: prevState.good + 1,
// }))
// };
// handleIncrNeutral = () => { this.setState(prevState => ({
//     neutral: prevState.neutral + 1,
// }))
// };
// handleIncrBad  = () => { this.setState(prevState => ({
//     bad: prevState.bad + 1,
// }))
// };
