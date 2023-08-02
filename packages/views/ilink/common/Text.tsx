import styles from '/packages/styles/ilink/pages/chat/Chat.module.scss';

interface InnerTextProps {
  innerText: string;
}

const CaseText = ({ innerText }: InnerTextProps) => {
  return (
    <div className={styles.messageInner}>
      <div className={styles.textWrap}>{innerText}</div>
    </div>
  );
};

export default CaseText;
