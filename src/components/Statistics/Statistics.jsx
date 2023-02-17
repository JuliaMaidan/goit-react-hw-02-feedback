import React, { Component } from 'react';
import { Notification } from '../Notification/Notification';
import style from "./Statistics.module.scss"

export class Statistics extends Component{

    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props

        if (total === 0) {
            return <Notification message="There is no feedback" />
        }

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