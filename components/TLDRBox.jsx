import styles from './TLDRBox.module.scss';


export const TLDRBox = ({ children }) => {
    return <div className={styles['tldr-box']}>
        <h3 className={styles['tldr-title']}>TL;DR</h3>
        { children }
    </div>
};

export default TLDRBox;