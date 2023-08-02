import styles from '/packages/styles/ilink/pages/chat/Chat.module.scss';

const CaseImageButton = () => {
  return (
    <div className={styles.messageInner}>
      <div className={styles.imageWrap}>
        <img src="/src/stories/mockData/images/ticket-product.gif" alt="" />
      </div>
      <div className={styles.buttonWrap}>
        <button>쿠폰받기</button>
      </div>
    </div>
  );
};

export default CaseImageButton;
