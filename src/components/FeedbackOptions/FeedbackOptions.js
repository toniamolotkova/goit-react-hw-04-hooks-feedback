import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.btnWrap}>
      {options.map(option => (
        <button
          className={s.btn}
          onClick={() => onLeaveFeedback(option)}
          type="button"
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
