import React, { useState, useEffect, useContext } from 'react';
import '../../styles/styles.css';
import PageContext from '../../context/PageContext';

export default function WJ1S() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { page, setPage } = useContext(PageContext);

    const slides = [
        require("../../assets/images/cleaning/ct4/ct43.png"),
        require("../../assets/images/cleaning/ct4/ct43.png"),
        require("../../assets/images/cleaning/ct4/ct43.png"),
    ];

    const slideTexts = [
        {
            conjet: "GF POWER & GF SOLUTION ",
            paragraph: "The powder provides an abrasive polish to remove scratches and boost shine, enhances the surface's luster and offers protection against stains. ",
            listItems: [
                "Polishes Granite: Enhances shine and smoothness effectively",
                "Enhances Shine: Boosts granite’s natural luster and brilliance",
                "Protects Surface: Shields granite from stains and damage",
                "Removes Scratches: Fills in minor imperfections and blemishes",
            ]
        },
        {
            conjet: "MK2 Solution",
            paragraph: "Enhance and protect stone surfaces, delivering a high-gloss, mirror-like finish. Its crystallizing formula creates a durable layer that boosts color and luster while offering long-lasting protection. ",
            listItems: [
                "High Gloss Finish: Delivers a brilliant, mirror-like shine",
                "Crystallizes Surfaces:Durable, hard-wearing protective layer",
                "Enhances Stone: Boosts the natural color and luster",
                "Quick Drying: Minimizes wait time with fast results",
            ]
        },
        {
            conjet: "Klenco Marble Polish",
            paragraph: "Delivers a brilliant shine and revitalizes marble surfaces with its effective polishing formula. It adds a protective layer to guard against stains while ensuring easy application and long-lasting results.",
            listItems: [
                "Brilliant Shine: Enhances marble with a high-gloss finish",
                "Polishes Effectively: Smooths and revitalizes marble surfaces",
                "Protective Layer: Adds a protective coating against stains",
                "Long-Lasting: Maintains shine and protection over time",
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
                    <p className='list-dotparts-wj1'>
                        {slideTexts[currentSlide].paragraph.split('\n').map((text, index) => (
                            <React.Fragment key={index}>
                                {text}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    <ul>
                        {slideTexts[currentSlide].listItems.map((item, index) => (
                            <li key={index} className='bullet-list-ct4s'>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
