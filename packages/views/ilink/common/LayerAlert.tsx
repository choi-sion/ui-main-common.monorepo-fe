import styles from '/packages/styles/ilink/pages/gate/Gate.module.scss';

interface layerProps {
  active: boolean;
  closeLayer: any;
  buttonFirst: string;
  buttonSecond?: string;
  content: any;
}

const LayerAlert = ({ active, content, buttonFirst, buttonSecond, closeLayer }: layerProps) => {
  return (
    <div className={active ? styles.layerAlert + ' ' + styles.active : styles.layerAlert}>
      <div className={styles.layerAlertConfirm}>
        <div className={styles.layerAlertContent}>{content}</div>
        <div className={styles.layerAlertBtnWrap}>
          <button className={styles.layerAlertBtn} onClick={closeLayer}>
            {buttonFirst}
          </button>
          {buttonSecond ? (
            <button className={styles.layerAlertBtn} onClick={closeLayer}>
              {buttonSecond}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LayerAlert;
