import styles from '/packages/styles/ilink/pages/chat/Chat.module.scss';

const CaseTextButtonOne = () => {
  return (
    <div className={styles.messageInner}>
      <div className={styles.textWrap}>
        예매하신 티켓에 대해 문의하실 수 있습니다. 상담받을 티켓을 선택해주세요.
      </div>
      <div className={styles.buttonWrap}>
        <button>예매내역 조회하기</button>
      </div>
    </div>
  );
};

export default CaseTextButtonOne;
