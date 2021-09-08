import PropTypes from 'prop-types';
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
