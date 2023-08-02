import CaseText from './Text';
import CheckPrevious from './CheckPrevious';
import styles from '/packages/styles/ilink/pages/chat/Chat.module.scss';

const CommonSent = ({ contents }: { contents: any }) => {
  return (
    <>
      {contents.map((item: any, index: number) => (
        <div
          className={`${styles.streamWrapper} ${styles.sent} ${styles[CheckPrevious(index)]}`}
          key={index}
        >
          <div className={styles.stream} key={item.body}>
            <div className={styles.messageWrapper}>
              <CaseText innerText={item.body} />
            </div>
            {index === contents.length - 1 ? (
              <div className={styles.dateWrapper}>오후 12:34</div>
            ) : null}
          </div>
        </div>
      ))}
    </>
  );
};

export default CommonSent;
