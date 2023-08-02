import CaseText from './Text';
import CaseTextButtonOne from './TextButtonOne';
import CaseTextButtonMultiple from './TextButtonMultiple';
import CaseButton from './Button';
import CaseButtonFirst from './ButtonFirst';
import CaseImage from './Image';
import CaseImageButton from './ImageButton';
import CheckPrevious from './CheckPrevious';
import styles from '/packages/styles/ilink/pages/chat/Chat.module.scss';

const CommonReceive = ({ contents }: { contents: any }) => {
  return (
    <>
      {contents.map((item: any, index: number) => (
        <div
          className={`${styles.streamWrapper} ${styles.receive} ${styles[CheckPrevious(index)]}`}
          key={index}
        >
          <div className={styles.stream} key={index}>
            <div className={styles.photo}>
              <img
                src="//ticketimage.interpark.com/TicketImage/ilink_test/ic_chat_service.png"
                alt="프로필이미지"
              />
            </div>
            <div className={styles.messageWrapper}>
              {(() => {
                switch (item.type) {
                  case 'text':
                    return <CaseText innerText={item.body} />;
                  case 'image':
                    return <CaseImage />;
                  case 'button':
                    return <CaseButton />;
                  case 'buttonFirst':
                    return <CaseButtonFirst />;
                  case 'textButtonOne':
                    return <CaseTextButtonOne />;
                  case 'textButtonMultiple':
                    return <CaseTextButtonMultiple />;
                  case 'imageButton':
                    return <CaseImageButton />;
                }
              })()}
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

export default CommonReceive;
