import React, { Component } from 'react';
import style from "./Statistics.module.scss"
import PropTypes from 'prop-types';

export class Statistics extends Component{

    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props

        return (
            <ul className={style.list}>
                <li>Good: <span>{good}</span></li>
                <li>Neutral: <span>{neutral}</span></li>
                <li>Bad: <span>{bad}</span></li>
                <li>Total: <span>{total}</span></li>
                <li>Positive feedback: <span>{positivePercentage}%</span></li>
            </ul>
    )
    }
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}