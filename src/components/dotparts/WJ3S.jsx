import React, { useState, useEffect, useContext } from 'react';
import '../../styles/styles.css';
import PageContext from '../../context/PageContext';

export default function WJ3S() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { page, setPage } = useContext(PageContext);

    // Updated slides array with only two images
    const slides = [
        require("../../assets/images/hydro/hwj3/UHP nozzle.png"),
        require("../../assets/images/hydro/hwj3/AB nozzle.png"),
    ];

    // Updated slideTexts array with only two sets of text
    const slideTexts = [
        {
            conjet: "VertiDrive V700: UHP Nozzle",
            paragraph: "Offers advanced robotic water blasting with an operator-controlled UHP nozzle. Its magnetic crawling system and precision design provide efficient, high-performance blasting on vertical surfaces.",
            listItems: [
                "Magnetic Crawling: Sticks securely to vertical surfaces.",
                "UHP Nozzle: Delivers ultra-high-pressure water jets",
                "Remote Control: Allows precise operator maneuvering.",
                "Advanced Design: Performs well in tough environments.",
            ]
        },
        {
            conjet: "VertiDrive V700: Abrasive Nozzle",
            paragraph: "Features an abrasive nozzle for robotic blasting, offering precise control via an operator's controller. Its magnetic system and rugged design ensure efficient performance on vertical surfaces.",
            listItems: [
                "Enhanced Safety: Reduces operator hazard exposure.",
                "Abrasive Nozzle: Effective for high-impact blasting",
                "Remote Control: Precision operation with operator's control.",
                "Durable Construction: Efficiently handles demanding tasks.",
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
                    <p className='list-dotparts-wj3'>
                        {slideTexts[currentSlide].paragraph.split('\n').map((text, index) => (
                            <React.Fragment key={index}>
                                {text}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    <ul>
                        {slideTexts[currentSlide].listItems.map((item, index) => (
                            <li key={index} className='bullet-list-wj3s'>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
