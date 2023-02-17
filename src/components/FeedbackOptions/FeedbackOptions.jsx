import styles from "./FeedbackOptions.module.scss"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={styles.list}>
            {options.map(option => (
                <li key={option} className={styles.item}>
                    <button className={styles.btn} onClick={() => onLeaveFeedback(option)}>{option}</button>
                </li>
            ))}
        </ul>
    )
}