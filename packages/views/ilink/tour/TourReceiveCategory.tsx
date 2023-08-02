import CaseTourCategory from './TourCategory';
import styles from '/packages/styles/ilink/pages/chat/Chat.module.scss';

const TourReceiveCategory = () => {
  return (
    <div className={[styles.streamWrapper, styles.receive, styles.different].join(' ')}>
      <div className={styles.stream}>
        <div className={styles.photo}>
          <img
            src="//imgp.interpark.com/tt/ilink_test/5daaf203-ba15-4ea8-8f42-5347b109b9f7/1679007893095_119.png?f=png"
            alt="프로필이미지"
          />
        </div>
        <div className={styles.messageWrapper}>
          <CaseTourCategory />
        </div>
        <div className={styles.dateWrapper}>오후 12:34</div>
      </div>
    </div>
  );
};

export default TourReceiveCategory;
