import React, { useEffect, useRef } from 'react';

import './index.scss';
import Carousel from 'bootstrap/js/dist/carousel';


const CarouselSlide = ({ title, text, image, linkUrl }) => {
    return <div className='carousel-slide'>
        <div className='row m-0 p-0'>
            <div className='col-12 col-md-7'>
                <h6>{ title }</h6>
                <div className='mt-4 mb-4 mb-md-5'>
                    <p>{ text }</p>
                </div>
                <button 
                    className='btn btn-dark'
                    onClick={() => window.location.href = linkUrl}
                >
                    Read the case study
                </button>
            </div>
            <div className='d-none d-md-block col-12 col-md-5 img-container'>
                <img src={image} alt='Tanaos Synthex' />
            </div>
        </div>
    </div>
};


export const CustomCarousel = ({ slides }) => {

    const carouselRef = useRef(null);

    useEffect(() => {
        const carouselElement = carouselRef.current;

        const carousel = new Carousel(carouselElement, {
            interval: 4000,
            ride: 'carousel',
        });

        // Restart sliding automatically after a slide event.
        const restartCarousel = () => carousel.cycle();
        carouselElement.addEventListener('slide.bs.carousel', restartCarousel);

        return () => {
            carouselElement.removeEventListener('slide.bs.carousel', restartCarousel);
            carousel.dispose();
        };
    }, []);
    
    return <div id='caseStudiesCarousel' className='carousel slide mt-5' ref={carouselRef}>
        <div className='carousel-inner'>
            {
                slides.map(( slide, key ) => {
                    return <div className={`carousel-item ${key===0 && 'active'}`} key={key}>
                        <CarouselSlide 
                            title={slide.title}
                            text={slide.text}
                            image={slide.image}
                            linkUrl={slide.linkUrl}
                        />
                    </div>
                })
            }
        </div>
        <button 
            className='carousel-control-prev d-none d-md-block' type='button' 
            data-bs-target='#caseStudiesCarousel' data-bs-slide='prev'
        >
            <i className='bi bi-chevron-left'></i>
            <span className='visually-hidden'>Previous</span>
        </button>
        <button 
            className='carousel-control-next d-none d-md-block' type='button' 
            data-bs-target='#caseStudiesCarousel' data-bs-slide='next'
        >
            <i className='bi bi-chevron-right'></i>
            <span className='visually-hidden'>Next</span>
        </button>
        <div className='carousel-indicators'>
            {
                slides.map(( slide, key ) => {
                    const isAriaCurrent = key === 0 ? 'true' : 'false';
                    return <button
                        type='button' data-bs-target='#caseStudiesCarousel'
                        data-bs-slide-to={key} className={`${key===0 && 'active'}`}
                        aria-current={isAriaCurrent} aria-label={`Slide ${key}`}
                        key={key}
                    ></button>
                })
            }
        </div>
    </div>
};

export default CustomCarousel;