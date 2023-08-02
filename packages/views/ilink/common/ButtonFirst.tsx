import styles from '/packages/styles/ilink/pages/chat/Chat.module.scss';

const CaseButtonFirst = () => {
  return (
    <div className={styles.messageInner}>
      <div className={[styles.buttonWrap, styles.first].join(' ')}>
        <button>처음으로</button>
      </div>
    </div>
  );
};

export default CaseButtonFirst;
