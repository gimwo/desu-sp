import React, { useState, useEffect, useContext } from 'react';
import '../../styles/styles.css';
import PageContext from '../../context/PageContext';

export default function CT3S() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { page, setPage } = useContext(PageContext);

    const slides = [
        require("../../assets/images/cleaning/ct3/ct35.png"),
        require("../../assets/images/cleaning/ct3/ct35.png"),
        require("../../assets/images/cleaning/ct3/ct35.png"),
    ];

    const slideTexts = [
        {
            conjet: "ACTION 170S",
            paragraph: "Delivers deep cleaning power by effectively removing embedded dirt and enhancing extraction results. Its quick-drying, non-foaming formula is safe for carpets and neutralizes odors. ",
            listItems: [
                "Deep Cleaning: Penetrates and removes embedded dirt effectively",
                "Safe on Carpets: Gentle on various carpet types and fibers",
                "Odor Neutralizing: Eliminates unpleasant odors for fresh spaces",
                "Non-Foaming Formula: Prevents excessive foam during extraction",
            ]
        },
        {
            conjet: "SHINE ON",
            paragraph: "Delivers a brilliant, glossy finish while providing long-lasting protection with its silicone formula. It repels dust and conceals minor scratches, making it ideal for maintaining various furniture materials.",
            listItems: [
                "Brilliant Shine: Enhances furniture with a glossy finish",
                "Silicone Formula: Provides long-lasting, smooth surface protection",
                "Dust Repellent: Helps keep surfaces clean longer",
                "Scratch Concealing: Helps mask minor scratches and imperfections",
            ]
        },
        {
            conjet: "POWER BRITE",
            paragraph: "Designed to tackle tough grime and mineral deposits with its effective acidic formula. Its fast-acting, versatile, and non-corrosive properties ensure thorough cleaning across various surfaces",
            listItems: [
                "Effective Acidic Cleaning: Breaks down tough grime and stains",
                "Fast Acting: Provides quick results for efficient cleaning",
                "Concentrated Formula: Delivers powerful cleaning with minimal use",
                "Non-Corrosive: Safe for use on delicate surfaces",
            ]
        },
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
                <div className="column">
                    <div className=''>
                        <div className="">
                            <p className='barcode'>{slideTexts[currentSlide].conjet}</p>
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
                <div className="column rajdhani-semibold">
                    <p className='dotparts-heading-ct3s'>
                        {slideTexts[currentSlide].paragraph.split('\n').map((text, index) => (
                            <React.Fragment key={index}>
                                {text}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    <ul>
                        {slideTexts[currentSlide].listItems.map((item, index) => (
                            <li key={index} className='bullet-list-ct3s'>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
