import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Section } from "../Section/Section";
import { Statistics } from "../Statistics/Statistics"
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';


export class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    onLeaveFeedback = (option) => {
        this.setState(prevState => (
            {[option]:prevState[option] + 1}
        ))
    }

    countTotalFeedback = () => {
        const { good, neutral, bad} = this.state
        const total = good + neutral + bad;
        
        return total
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state
        const positivePercentage = (good >= 1)? Math.round(good / (this.countTotalFeedback()) * 100) : 0

        return positivePercentage
    }

    render() {
        const { good, neutral, bad } = this.state
        const total = this.countTotalFeedback()
        const positivePercentage = this.countPositiveFeedbackPercentage()
    
        return (
            <div>
                <Section title="Please, leave feedback" >
                    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
                </Section>
                <Section title="Statistics">
                    <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}></Statistics>
                </Section>
            </div>
        )
    }
}

Feedback.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
};