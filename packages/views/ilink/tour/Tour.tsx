import TourReceiveCategory from './TourReceiveCategory';
import styles from '/packages/styles/ilink/pages/chat/Chat.module.scss';

const TourExample = () => {
  return (
    <div className={[styles.chatContainer, styles.domesticHotel].join(' ')}>
      <section className={styles.streams}>
        <TourReceiveCategory />
      </section>
    </div>
  );
};

export default TourExample;
