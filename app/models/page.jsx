'use client';

import { useState, useEffect } from 'react';
import { BsShieldCheck, BsEnvelopeSlash, BsTag, BsEmojiSmile, BsSearch, BsTools, BsDownload } from 'react-icons/bs';
import { ClipLoader } from 'react-spinners';
import styles from './ModelsOverview.module.scss';
import { Config } from '../../config';

const MODEL_TYPE_ICONS = {
    'guardrail': <BsShieldCheck />,
    'spam-detection': <BsEnvelopeSlash />,
    'intent-classification': <BsTag />,
    'sentiment-analysis': <BsEmojiSmile />,
    'reranker': <BsSearch />,
};

function getIcon(modelType) {
    return MODEL_TYPE_ICONS[modelType] ?? <BsTools />;
}

function formatBytes(bytes) {
    if (!bytes) return null;
    return `${Math.round(bytes / (1024 * 1024))} MB`;
}

export default function ModelsOverview() {
    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${Config.API_BASE_URL}/models/public`)
            .then(res => {
                if (!res.ok) throw new Error(`Failed to fetch models (${res.status})`);
                return res.json();
            })
            .then(json => {
                setModels(json.data ?? []);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Our Models</h1>
            <div className={styles.subtitle}>These are some of our publicly available Small Language Models for various tasks and languages.</div>
            {loading && (
                <div className={styles['loading-container']}>
                    <ClipLoader size={50} />
                </div>
            )}
            {error && (
                <p className={styles['error-text']}>
                    Could not load models: {error}
                </p>
            )}
            {!loading && !error && (
                <div className={styles['models-list']}>
                    {models.map((model) => (
                        <div 
                            key={model.id} 
                            className={styles['model-row']}
                            onClick={() => window.location.href = Config.PLATFORM_BASE_URL}
                        >
                            <div className={styles['model-thumbnail']}>
                                <span className={styles['thumbnail-icon']}>{getIcon(model.model_type)}</span>
                                <span className={styles['thumbnail-name']}>{model.name}</span>
                                {model.size && <span className={styles['thumbnail-size']}>{formatBytes(model.size)}</span>}
                                <span className={styles['thumbnail-download']}><BsDownload /></span>
                            </div>
                            <div className={styles['model-details']}>
                                <h2 className={styles['detail-name']}>{model.name}</h2>
                                {model.params && <p className={styles['detail-line']}><strong>Params</strong>: {model.params}</p>}
                                {model.language && <p className={styles['detail-line']}><strong>Language</strong>: {model.language}</p>}
                                {model.description && <p className={styles['detail-line']}><strong>Description</strong>: {model.description}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
