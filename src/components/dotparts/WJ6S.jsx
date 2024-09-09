import React, { useState, useEffect, useContext } from 'react';
import '../../styles/styles.css';
import PageContext from '../../context/PageContext';

export default function WJ6S() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { page, setPage } = useContext(PageContext);

    const slides = [
        require("../../assets/images/hydro/hwj6/SAB.png"),
        require("../../assets/images/hydro/hwj6/SAA.png"),
        require("../../assets/images/hydro/hwj6/SAS.png"),
    ];

    const slideTexts = [
        {
            conjet: "STONEAGE BANSHEE",
            paragraph: "Accessory designed for internal tube cleaning, effectively removing debris from the inner surfaces. Its robust construction and innovative design ensure thorough and efficient cleaning of tubes.",
            listItems: [
                "Internal Cleaning: Targets debris inside tube surfaces",
                "Powerful Performance: Ensures thorough, efficient cleaning.",
                "Versatile Application: Suitable for various tube sizes",
                "Innovative: Boosts cleaning effectiveness and efficiency.",
            ]
        },
        {
            conjet: "STONEAGE AUTOBOX 3L",
            paragraph: "Accessory designed to push and pull hoses within tubes, facilitating smooth and efficient operation. Its advanced mechanism ensures reliable hose management during cleaning tasks.",
            listItems: [
                "Hose Management: Pushes and pulls hose smoothly",
                "Advanced Mechanism: Boosts efficiency and reliability.",
                "Efficient Operation: Cuts downtime, boosts productivity.",
                "Durable Construction: Suited for tough environments.",
            ]
        },
        {
            conjet: "STONEAGE SENTINEL",
            paragraph: "Automates navigation and operation, allowing for independent functioning while being controlled by an operator. Its advanced automation enhances efficiency and precision in complex cleaning tasks.",
            listItems: [
                "Automated Navigation: Functions independently, minimal .",
                "Efficient Cleaning: Boosts productivity, reduces effort.",
                "Versatile Operation: Adapts to any environment.",
                "Reliable Performance: Consistent in demanding tasks.",
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
                <div className="column text-column rajdhani-semibold">
                    <p className='list-dotparts-wj6'>
                        {slideTexts[currentSlide].paragraph.split('\n').map((text, index) => (
                            <React.Fragment key={index}>
                                {text}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    <ul>
                        {slideTexts[currentSlide].listItems.map((item, index) => (
                            <li key={index} className='bullet-list-wj6s'>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
