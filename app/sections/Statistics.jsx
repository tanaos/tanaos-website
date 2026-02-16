import styles from './Statistics.module.scss';

export const Statistics = () => {
    const stats = [
        { number: '7,000', label: 'monthly model downloads' },
        { number: '500 MB', label: 'average model size' },
        { number: '0%', label: 'data sent to third-party servers' },
    ];

    return (
        <div className={`${styles['statistics-section']} global-padding`}>
            <div className={styles['stats-container']}>
                {stats.map((stat, index) => (
                    <div key={index} className={styles['stat-item']}>
                        <span className={styles['stat-number']}>{stat.number}</span>
                        <span className={styles['stat-label']}>{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Statistics;
