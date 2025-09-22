import styles from './BlogPostPreview.module.scss'
import Link from 'next/link';


export const BlogPostPreview = ({ title, description, date, link }) => {
    return <Link href={link} target='_blank' rel='noreferrer'>
        <div 
            className={`${styles['blog-post-preview']}`}
        >
            <h1>{title}</h1>
            <p>{description}</p>
            <div className='row'>
                <div className='col-6 text-start'>
                    <span className={`${styles['date']}`}>{date}</span>
                </div>
                <div className='col-6 text-end'>
                    <span className={`${styles['read-more']}`}>Read more <i className='bi bi-arrow-right'></i></span>
                </div>
            </div>
        </div>
    </Link>
};

export default BlogPostPreview;