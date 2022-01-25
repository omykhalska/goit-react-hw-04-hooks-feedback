import React, { useState } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';
import { Container } from './App.styled';

function App() {
  const feedbackTypes = ['good', 'neutral', 'bad'];
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = type => {
    switch (type) {
      case 'good':
        setGood(prevValue => prevValue + 1);
        break;
      case 'neutral':
        setNeutral(prevValue => prevValue + 1);
        break;
      case 'bad':
        setBad(prevValue => prevValue + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / countTotalFeedback());

  return (
    <Container>
      <Section title={'Please, leave feedback'}>
        <FeedbackOptions
          options={feedbackTypes}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </Container>
  );
}

export default App;
