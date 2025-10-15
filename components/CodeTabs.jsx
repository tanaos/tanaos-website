'use client';

import { useState } from 'react';

import styles from './CodeTabs.module.scss';
import { CodeSnippet } from './CodeSnippet';


export const CodeTabs = ({ codeSnippets }) => {
    const [activeTab, setActiveTab] = useState(Object.keys(codeSnippets)[0]);

    return <div className={styles['code-tabs']}>
        {/* Tabs */}
        <ul className='nav nav-tabs'>
            {Object.keys(codeSnippets).map((tab) => (
                <li className='nav-item' key={tab}>
                    <button
                        className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                </li>
            ))}
        </ul>

        {/* Code block */}
        <div>
            <CodeSnippet code={codeSnippets[activeTab]} />
        </div>
    </div>
}

export default CodeTabs;