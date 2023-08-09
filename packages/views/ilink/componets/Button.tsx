import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';
import styles from '/packages/styles/ilink/componets/chat/ChatCom.module.scss';

const IlinkCaseButton = ({ primary, backgroundColor, label, onClick, fontSize, maxWidth, ...props }) => {
  const mode = primary ? styles.first : '';
  return (
    <div className={[styles.buttonWrap, mode].join(' ')}>
      <button
        type="button"
        style={{ ...(backgroundColor && { backgroundColor }), ...(fontSize && { fontSize }), ...(maxWidth && { maxWidth }) }}
        onClick={action('clicked')}
        {...props}
      >
        {label}
      </button>
    </div>
  );
};

IlinkCaseButton.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  fontSize : PropTypes.number,
  maxWidth : PropTypes.number
};

IlinkCaseButton.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium'
};


export default IlinkCaseButton;
