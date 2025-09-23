'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './CodeSnippet.module.scss';


export const CodeSnippet = ({ code, language = 'python' }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return <div className={`${styles['code-snippet-container']}`}>
        <SyntaxHighlighter
            language={language}
            style={oneLight}
            wrapLines={true}
            lineProps={{
                style: { wordBreak: 'break-word', whiteSpace: 'pre-wrap' }
            }}
            customStyle={{
                margin: 0,
                padding: '1rem',
                borderRadius: '0.75rem',
                fontSize: '0.9rem',
                boxShadow: '0 5px 8px rgba(0, 0, 0, 0.3)',
            }}
        >
            {code}
        </SyntaxHighlighter>
        <button
            className={`${copied ? styles['copied'] : ''}`}
            onClick={copyToClipboard}
        >
            {copied ? <i className='bi bi-check2'></i> : <i className='bi bi-clipboard'></i>}
        </button>
    </div>
}

export default CodeSnippet;