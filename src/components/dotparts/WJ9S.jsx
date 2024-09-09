import React, { useState, useEffect, useContext } from 'react';
import '../../styles/styles.css';
import PageContext from '../../context/PageContext';

export default function WJ9S() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { page, setPage } = useContext(PageContext);

    const slides = [
        require("../../assets/images/hydro/hwj9/SB9.png"),
        require("../../assets/images/hydro/hwj9/SA9.png"),
        require("../../assets/images/hydro/hwj9/SPB9.png"),
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
            conjet: "STONEAGE POSITIONING BOOM",
            paragraph: "Positions the nozzle centrally within the tank, ensuring even coverage of the internal surfaces. Its precise alignment enhances cleaning effectiveness and ensures thorough, consistent results.",
            listItems: [
                "Central Positioning: Ensures nozzle is centered in tank",
                "Even Coverage: Uniform cleaning across surfaces.",
                "Precise Alignment: Maintains accurate nozzle placement",
                "Effectiveness: Boosts cleaning consistency.",
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
                    <p className='list-dotparts-wj9'>
                        {slideTexts[currentSlide].paragraph.split('\n').map((text, index) => (
                            <React.Fragment key={index}>
                                {text}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    <ul>
                        {slideTexts[currentSlide].listItems.map((item, index) => (
                            <li key={index} className='bullet-list-wj9s'>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
