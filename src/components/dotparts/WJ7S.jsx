import React, { useState, useEffect, useContext } from 'react';
import '../../styles/styles.css';
import PageContext from '../../context/PageContext';

export default function WJ7S() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { page, setPage } = useContext(PageContext);

    const slides = [
        require("../../assets/images/hydro/hwj7/STB.png"),
        require("../../assets/images/hydro/hwj7/STA.png"),
        require("../../assets/images/hydro/hwj7/STC.png"),
    ];

    const slideTexts = [
        {
            conjet: "STONEAGE BJV",
            paragraph: "Accessory designed to clean the internal surfaces of pipes, effectively removing debris and buildup. Its robust design ensures thorough cleaning and efficient operation within various pipe sizes.",
            listItems: [
                "Internal Cleaning: Removes debris from pipe surfaces",
                "Versatile Application: Works with different pipe sizes",
                "Efficient Operation: Boosts speed and effectiveness.",
                "User-Friendly: Simplifies operation and maintenance",
            ]
        },
        {
            conjet: "STONEAGE AUTOBOX 500",
            paragraph: "Accessory designed to push and pull hoses inside pipes, facilitating smooth and efficient hose management. Its advanced mechanism ensures reliable and precise control during cleaning operations.",
            listItems: [
                "Hose Management: Pushes and pulls hose inside pipes",
                "Advanced Mechanism: Reliable and precise hose control",
                "Versatile Use: Compatible with various pipe sizes",
                "Efficient Operation: Simplifies hose management.",
            ]
        },
        {
            conjet: "STONEAGE CENTRALIZER",
            paragraph: "Positions the nozzle centrally inside the pipe, ensuring even coverage of the internal surface. Its precise design improves cleaning efficiency and effectiveness by maintaining consistent nozzle placement.",
            listItems: [
                "Centralized: Ensures even nozzle coverage inside ",
                "Improved Coverage: Uniform cleaning on surfaces.",
                "Precise Design: Maintains consistent nozzle placement",
                "Efficiency: Optimizes cleaning effectiveness and speed",
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
                    <p className='list-dotparts-wj7'>
                        {slideTexts[currentSlide].paragraph.split('\n').map((text, index) => (
                            <React.Fragment key={index}>
                                {text}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    <ul>
                        {slideTexts[currentSlide].listItems.map((item, index) => (
                            <li key={index} className='bullet-list-wj7s'>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
