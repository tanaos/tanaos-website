import { BsXLg } from 'react-icons/bs';

import styles from './HeadlineBar.module.scss';


export const HeadlineBar = ({ children, displayed, onDismiss }) => {
    return displayed && <div className={styles['headline-bar']}>
        <BsXLg className={`me-2 ${styles['close-icon']}`} onClick={onDismiss} />
        { children }
    </div>
};

export default HeadlineBar;