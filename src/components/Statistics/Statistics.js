import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li className={s.item}>Good: {good}</li>
      <li className={s.item}>Neutral: {neutral}</li>
      <li className={s.item}>Bad: {bad}</li>
      <li className={s.item}>Total: {total} </li>
      <li className={s.item}>
        {' '}
        Good feedbacks: {isNaN(positivePercentage) ? good : positivePercentage}%
      </li>
    </ul>
  );
};

export default Statistics;
