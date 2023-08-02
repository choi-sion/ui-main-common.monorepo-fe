import styles from '/packages/styles/ilink/pages/chat/Chat.module.scss';

const CaseTourCategory = () => {
  const buttonArray = [
    '해외여행 상담(개별/소그룹 맞춤여행)',
    '패키지여행',
    '자유여행',
    '허니문여행',
    '크루즈여행',
    '골프여행',
    '패스/현지투어/유레일',
    '단체/법인 맞춤여행',
    '지역별 해외여행 정보',
    '취소규정',
    '기타',
  ];

  return (
    <div className={styles.messageInner}>
      <div className={styles.textWrap}>
        어떤 내용이 궁금하신가요?
        <br />
        궁금한 내용을 선택해주세요.
      </div>
      {buttonArray.map((item) => (
        <div className={styles.buttonWrap} key={item}>
          <button>{item}</button>
        </div>
      ))}
    </div>
  );
};

export default CaseTourCategory;
