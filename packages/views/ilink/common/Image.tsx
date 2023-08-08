import styles from '/packages/styles/ilink/pages/chat/Chat.module.scss';

const CaseImage = () => {
  return (
    <div className={styles.messageInner}>
      <div className={styles.imageWrap}>
        <img src="/packages/data/images/ilink/tour-product.jpeg" alt="" />
      </div>
      <div className={styles.textWrap}>
        어떤 내용이 궁금하신가요?
        <br />
        궁금한 내용을 선택해주세요.
      </div>
    </div>
  );
};

export default CaseImage;
