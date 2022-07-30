import React from 'react';
import './Feedback.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  countNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  countBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const state = this.state;
    const total = state.bad + state.neutral + state.good;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const good = this.good;
    const positiveFeedback = Math.round(
      (good / this.countTotalFeedback()) * 100
    );
    return positiveFeedback;
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={this.countGoodFeedback}>
          Good
        </button>
        <button type="button" onClick={this.countNeutralFeedback}>
          Neutral
        </button>
        <button type="button" onClick={this.countBadFeedback}>
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage() || 0}%</p>
      </div>
    );
  }
}

export default Feedback;
