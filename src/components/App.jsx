import React from 'react';
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

class App extends React.Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const state = this.state;
    const total = state.bad + state.neutral + state.good;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const good = this.state.good;
    const positiveFeedback = Math.round(
      (good / this.countTotalFeedback()) * 100
    );
    return positiveFeedback;
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      > 
        <Section title={'Please leave feedback'}>
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.countFeedback}/>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={ this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage() }
          />
        </Section>
      </div>
    );
  };
}

export default App;