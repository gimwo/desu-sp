import React, { useState, useEffect, useContext } from 'react';
import '../../styles/styles.css';
import PageContext from '../../context/PageContext';

export default function WJ1S() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { page, setPage } = useContext(PageContext);

    const slides = [
        require("../../assets/images/univ/x3.webp"),
        require("../../assets/images/univ/x4.webp"),
        require("../../assets/images/univ/x5.webp"),
    ];

    const slideTexts = [
        {
            conjet: "CONJET ROBOT 557",
            paragraph: "Advanced accessory for automated robotic hydro demolition, allowing operators to achieve precise control and efficient material removal using a sophisticated controller.",
            listItems: [
                "Automated Operation: Advanced robotic automation for demolition",
                "Controller Integration: Intuitive controller for precise operation",
                "Robust Construction: Withstands harsh industrial conditions.",
                "Efficient Material Removal: Powerful jets ensure effectiveness.",
            ]
        },
        {
            conjet: "CONJET ROBOT 101 NALTA",
            paragraph: "Offers precise, efficient hydro demolition with its semi-automated control and advanced technology. Its rugged construction and intuitive design ensure reliable performance and reduced operator fatigue.",
            listItems: [
                "Advanced Technology: Uses state-of-the-art methods.",
                "Rugged Construction: Withstands harsh conditions",
                "Semi-Automated Control: Enhances efficiency and accuracy.",
                "Versatile Applications: Ideal for all demolition tasks.",
            ]
        },
        {
            conjet: "NLB NCG24-535 HAND LANCE",
            paragraph: "Premium tool for semi-automated hydro demolition, offering enhanced precision and efficiency with its advanced controller. Its robust construction, ergonomic design, and high-pressure capabilitie.",
            listItems: [
                "Ergonomic: Reduces fatigue and enhances comfort during use",
                "High-Pressure: Delivers powerful jets for effective removal.",
                "Durable : Built to withstand rigorous industrial environments.",
                "Semi-Automated: Offers precise control, boosting efficiency.",
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
                            <li key={index} className='bullet-list-wj1s'>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
