import styles from './HeadlineBar.module.scss';


export const HeadlineBar = ({ children, onBannerDismiss }) => {

    const handleBannerDismiss = () => {
        onBannerDismiss(false)
    }

    return <div className={styles['headline-bar']}>
        <i className={`bi bi-x-lg ${styles['close-icon']} me-2`}
            onClick={handleBannerDismiss}
        ></i>
        { children }
    </div>
};

export default HeadlineBar;