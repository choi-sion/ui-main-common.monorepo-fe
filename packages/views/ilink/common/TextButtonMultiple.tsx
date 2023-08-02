import styles from '/packages/styles/ilink/pages/chat/Chat.module.scss';

const CaseTextButtonMultiple = () => {
  const buttonArray = ['취소', '환불', '입금', '배송', '예약정보 변경', '분실/대리수령'];

  return (
    <div className={styles.messageInner}>
      <div className={styles.textWrap}>
        어떤 내용이 궁금하신가요?
        <br />
        궁금한 내용을 선택해주세요.
      </div>
      {buttonArray.map((item, index) => (
        <div className={styles.buttonWrap} key={index}>
          <button>{item}</button>
        </div>
      ))}
    </div>
  );
};

export default CaseTextButtonMultiple;
