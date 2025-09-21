import './index.scss';
import { Config } from '../../config';
import {  BlogPostPreview } from '../../components/BlogPostPreview';


const blogPostPreviews = [
    {
        title: 'This is a sample title',
        description: 'This is a sample description for the blog post preview component. It gives a brief overview of the blog post content.',
        date: 'August 20, 2023',
        link: 'https://google.com'
    }
]

export const BlogPageLayout = () => {
    return <div className='blog-page'>
        <div className='text-center'>
            <h3>See what's new at Tanaos</h3>
            <p className='mt-4'>
                Stay updated with the latest features and improvements.
                <br />
                Find more stories on our <a 
                    href={Config.LINKEDIN_URL}
                    target='_blank'
                    rel='noreferrer'
                >
                    LinkedIn
                </a> and <a 
                    href={Config.TWITTER_URL}
                    target='_blank'
                    rel='noreferrer'
                >
                    X/Twitter
                </a> pages.
            </p>
        </div>
        <div className='previews-container'>
            {blogPostPreviews.map((post, index) => 
                <BlogPostPreview 
                    key={index}
                    title={post.title}
                    description={post.description}
                    date={post.date}
                    link={post.link}
                />
            )}
        </div>
    </div>
};

export default BlogPageLayout;