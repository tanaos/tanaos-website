'use client';

import { Check2, Clipboard } from 'react-bootstrap-icons';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './CodeSnippet.module.scss';


export const CodeSnippet = ({ code, language = 'python' }) => {
    const [ copied, setCopied ] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const customStyle = {
        ...oneDark,
        comment: { color: '#aaa' }, // update comment colors, barely visible in dark mode
    };

    return <div className={`${styles['code-snippet-container']} mb-5`}>
        <SyntaxHighlighter
            className='code-block'
            language={language}
            style={customStyle}
            wrapLines={false}
            lineProps={{
                style: { wordBreak: 'break-word', whiteSpace: 'pre-wrap' }
            }}
            customStyle={{
                margin: 0,
                padding: '1rem',
                borderRadius: '0.75rem',
            }}
        >
            {code}
        </SyntaxHighlighter>
        <button
            className={`${copied ? styles['copied'] : ''}`}
            onClick={copyToClipboard}
        >
            {copied ? <Check2 /> : <Clipboard />}
        </button>
    </div>
}

export default CodeSnippet;