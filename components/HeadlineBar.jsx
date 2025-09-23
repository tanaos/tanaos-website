import styles from './HeadlineBar.module.scss';

export const HeadlineBar = ({ children, displayed, onDismiss }) => {
    return displayed && <div className={styles['headline-bar']}>
        <i className={`bi bi-x-lg ${styles['close-icon']} me-2`}
            onClick={onDismiss}
        ></i>
        { children }
    </div>
};

export default HeadlineBar;