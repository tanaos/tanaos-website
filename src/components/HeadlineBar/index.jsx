import './index.scss';


export const HeadlineBar = ({ children, onBannerDismiss }) => {

    const handleBannerDismiss = () => {
        onBannerDismiss(false)
    }

    return <div className='headline-bar'>
        <i className='bi bi-x-lg close-icon me-2'
            onClick={handleBannerDismiss}
        ></i>
        { children }
    </div>
};

export default HeadlineBar;