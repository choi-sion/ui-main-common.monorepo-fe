import styles from '/packages/styles/ilink/pages/chat/Chat.module.scss';

const CaseImageButton = () => {
  return (
    <div className={styles.messageInner}>
      <div className={styles.imageWrap}>
        <img src="/packages/data/images/ilink/ticket-product.gif" alt="" />
      </div>
      <div className={styles.buttonWrap}>
        <button>쿠폰받기</button>
      </div>
    </div>
  );
};

export default CaseImageButton;
