import React, { useState, useEffect, useContext } from 'react';
import '../../styles/styles.css';
import PageContext from '../../context/PageContext';

export default function WJ11S() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { page, setPage } = useContext(PageContext);

    // Updated slides array with only two images
    const slides = [
        require("../../assets/images/hydro/hwj11/NSF.png"),
        require("../../assets/images/hydro/hwj11/NNHL.png"),
    ];

    // Updated slideTexts array with only two sets of text
    const slideTexts = [
        {
            conjet: "NLB SpinJet Floor",
            paragraph: "Accessory designed for walk-behind water jetting, allowing users to efficiently clean floors and grates. Its spinning jets provide thorough and effective cleaning for a variety of surfaces.",
            listItems: [
                "Spinning Jets: Ensures thorough floor and grate cleaning",
                "Walk-Behind Design: User-friendly for manual operation",
                "Effective Cleaning: Removes debris and buildup.",
                "Easy Maneuvering: Simplifies movement and operation",
            ]
        },
        {
            conjet: "NLB NCG24-535 HAND LANCE",
            paragraph: "Premium tool for semi-automated hydro demolition, offering enhanced precision and efficiency with its advanced controller. Its robust construction, ergonomic design, and high-pressure capabilities.",
            listItems: [
                "Ergonomic: Reduces fatigue and enhances comfort during use",
                "High-Pressure: Delivers powerful jets for effective removal.",
                "Durable : Can withstand rigorous industrial environments.",
                "Semi-Automated: Offers precise control, boosting efficiency.",
            ]
        }
    ];

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        setPage(() => "");
    }, [setPage]);

    return (
        <div className="App">
            <div className="section section-bg">
                <div className="column slider-column">
                    <div className='slider-container'>
                        <div className="slider">
                            <p className='barcode conjet-spacing'>{slideTexts[currentSlide].conjet}</p>
                            {slides.map((image, index) => (
                                <div
                                    key={index}
                                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                                >
                                    <img src={image} alt={`Slide ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <div className="slider-dots">
                            {slides.map((_, index) => (
                                <React.Fragment key={index}>
                                    <span
                                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                                        onClick={() => handleDotClick(index)}
                                    ></span>
                                    {index < slides.length - 1 && <div className="line"></div>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="column text-column rajdhani-semibold">
                    <p className='list-dotparts-wj11'>
                        {slideTexts[currentSlide].paragraph.split('\n').map((text, index) => (
                            <React.Fragment key={index}>
                                {text}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    <ul>
                        {slideTexts[currentSlide].listItems.map((item, index) => (
                            <li key={index} className='bullet-list-wj11s'>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
