import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';
import styles from '/packages/styles/ilink/componets/chat/ChatCom.module.scss';

const IlinkCaseButton = ({ primary, backgroundColor, size, label, onClick, ...props }) => {
  const mode = primary ? styles.first : '';
  return (
    <div className={styles.messageInner}>
      <div className={[styles.buttonWrap, mode].join(' ')}>
        <button
          className={[styles.btnSize+`${size}`].join(' ')}
          type="button"
          style={backgroundColor && { backgroundColor }}
          onClick={action('clicked')}
          {...props}
        >
          {label}
        </button>
      </div>
    </div>
  );
};

IlinkCaseButton.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onArchiveTask: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

IlinkCaseButton.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium'
};

export default IlinkCaseButton;
