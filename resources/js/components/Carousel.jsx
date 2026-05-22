import React from 'react'
import Slider from "react-slick";
import { arr } from "../assets/imageExport"
import { Link } from 'react-router-dom';

const slides = [
    { img: arr[0], tag: 'New Season', title: 'Street-Ready Sneakers', subtitle: 'Bold comfort for everyday movement.' },
    { img: arr[1], tag: 'Performance', title: 'Engineered For Speed', subtitle: 'Run lighter with modern cushioning.' },
    { img: arr[2], tag: 'Limited Drop', title: 'Iconic Everyday Classics', subtitle: 'Minimal silhouettes, maximum impact.' },
    { img: arr[3], tag: 'Weekend Edit', title: 'Smart Casual Rotation', subtitle: 'From office hours to evening plans.' },
    { img: arr[4], tag: 'Kids Picks', title: 'Playproof And Stylish', subtitle: 'Comfort and grip for active days.' },
];

const Arrow = ({ onClick, direction }) => (
    <button
        type="button"
        onClick={onClick}
        className={`absolute top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-slate-900/55 text-xl text-white backdrop-blur transition hover:bg-slate-900/80 md:grid ${direction === 'left' ? 'left-4' : 'right-4'
            }`}
        aria-label={direction === 'left' ? 'Previous slide' : 'Next slide'}
    >
        {direction === 'left' ? '←' : '→'}
    </button>
);

const Carousel = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 900,
        autoplaySpeed: 4500,
        adaptiveHeight: false,
        cssEase: "cubic-bezier(0.22, 1, 0.36, 1)",
        nextArrow: <Arrow direction="right" />,
        prevArrow: <Arrow direction="left" />,
        dots: true,
        arrows: true,
    };

    return (
        <div className='mx-auto mt-4 max-w-[96%] overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-[0_30px_80px_rgba(15,23,42,0.22)] md:max-w-[92%]'>
            <Slider {...settings}>
                {slides.map((slide, idx) => (
                    <div key={idx}>
                        <div className='relative h-[300px] md:h-[420px]'>
                            <img src={slide.img} alt={slide.title} className='h-full w-full object-cover' />
                            <div className='absolute inset-0 bg-[linear-gradient(110deg,rgba(2,6,23,0.86)_0%,rgba(2,6,23,0.5)_45%,rgba(2,6,23,0.1)_100%)]' />

                            <div className='absolute inset-0 flex items-end p-5 md:items-center md:p-12'>
                                <div className='max-w-xl text-white'>
                                    <span className='inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-200 backdrop-blur'>
                                        {slide.tag}
                                    </span>
                                    <h2 className='mt-3 text-2xl font-black leading-tight md:text-5xl'>{slide.title}</h2>
                                    <p className='mt-2 text-sm text-slate-200 md:text-base'>{slide.subtitle}</p>
                                    <div className='mt-5'>
                                        <Link to="/shoes/men" className='inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-300'>
                                            Shop now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel
