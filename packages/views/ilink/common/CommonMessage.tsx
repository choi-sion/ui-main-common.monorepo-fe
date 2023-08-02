import {
  receiveTypesArray,
  receiveSingleArray,
  sendSingleArray,
  sendMultipleArray,
} from '/packages/mockData/ilink/text/CaseArray';
import CommonSent from './CommonSent';
import CommonReceive from './CommonReceive';
import styles from '/packages/styles/ilink/pages/chat/Chat.module.scss';

const CommonMessage = () => {
  return (
    <div className={styles.chatContainer}>
      <section className={styles.streams}>
        <CommonReceive contents={receiveTypesArray} />
        <CommonSent contents={sendSingleArray} />
        <CommonReceive contents={receiveSingleArray} />
        <CommonSent contents={sendMultipleArray} />
      </section>
    </div>
  );
};

export default CommonMessage;
