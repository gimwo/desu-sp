import React, { useState, useEffect, useContext } from 'react';
import '../../styles/styles.css';
import PageContext from '../../context/PageContext';

export default function WJ11S() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { page, setPage } = useContext(PageContext);

    // Updated slides array with only two images
    const slides = [
        require("../../assets/images/hydro/hwj12/NM.png"),
        require("../../assets/images/hydro/hwj12/NNHL.png"),
    ];

    // Updated slideTexts array with only two sets of text
    const slideTexts = [
        {
            conjet: "NLB MICROARM",
            paragraph: "Accessory for robotic water jetting, allowing precise control via an operator's controller. accurate cleaning in tight or hard-to-reach areas.",
            listItems: [
                "Robotic Control: Operated precisely via a controller",
                "Compact Design: Ideal for tight or restricted areas",
                "Efficient Cleaning: Targets specific spots with precision.",
                "Durable: Withstands demanding conditions.",
            ]
        },
        {
            conjet: "NLB NCG24-535 HAND LANCE",
            paragraph: "Premium tool for semi-automated hydro demolition, offering enhanced precision and efficiency with its advanced controller. Its robust construction, ergonomic design, and high-pressure capabilities make it ideal for industrial tasks.",
            listItems: [
                "Ergonomic: Reduces fatigue and enhances comfort during use",
                "High-Pressure: Delivers powerful jets for effective removal.",
                "Durable : Built to withstand rigorous industrial environments.",
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
                    <p className='list-dotparts-wj12'>
                        {slideTexts[currentSlide].paragraph.split('\n').map((text, index) => (
                            <React.Fragment key={index}>
                                {text}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    <ul>
                        {slideTexts[currentSlide].listItems.map((item, index) => (
                            <li key={index} className='bullet-list-wj12s'>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
