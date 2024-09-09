import React, { useState, useEffect, useContext } from 'react';
import '../../styles/styles.css';
import PageContext from '../../context/PageContext';

export default function CT2S() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { page, setPage } = useContext(PageContext);

    const slides = [
        require("../../assets/images/cleaning/ct1/ct14.png"),
        require("../../assets/images/cleaning/ct1/ct14.png"),
        require("../../assets/images/cleaning/ct1/ct14.png"),
    ];

    const slideTexts = [
        {
            conjet: "Action 150S",
            paragraph: "High-performance stripper designed to quickly and effectively remove heavy buildups of floor polishes and waxes. Its powerful solvents and versatile use make it ideal for a range of floor types. ",
            listItems: [
                "Powerful Stripping: Removes heavy buildups quickly and efficiently",
                "High-Grade Solvents: Ensures effective removal of tough residues",
                "Versatile Use: Safe for various floor types and surfaces",
                "Fast Acting: Strips away polishes and waxes effortlessly",
            ]
        },
        {
            conjet: "Action 130",
            paragraph: "Designed to remove tough grease and grime while ensuring safety in food preparation areas. Its non-toxic, versatile formula allows for quick and efficient cleaning across various surfaces.",
            listItems: [
                "Food Safe: Ensures safety for food preparation areas",
                "Powerful Degreasing: Removes tough grease and grime effectively",
                "Non-Toxic Formula: Safe for use in sensitive environments",
                "Easy Rinsing: Rinses off easily without leaving residues",
            ]
        },
        {
            conjet: "Spotlight",
            paragraph: "Delivers a high-gloss, durable finish that enhances the appearance of floors while resisting wear and scratches. Quick-drying, easy-application formula ensures a smooth process and long-lasting results. ",
            listItems: [
                "High Gloss Finish: Provides a brilliant, long-lasting shine",
                "Durable Formula: Resists wear and maintains appearance",
                "Scratch Resistant: Protects surfaces from damage and abrasion",
                "Non-Yellowing: Maintains clarity and brightness over time",
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
                <div className="column rajdhani-semibold">
                    <p className='list-paragraph-heading'>
                        {slideTexts[currentSlide].paragraph.split('\n').map((text, index) => (
                            <React.Fragment key={index}>
                                {text}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    <ul>
                        {slideTexts[currentSlide].listItems.map((item, index) => (
                            <li key={index} className='bullet-list-ct2s '>{item}</li>
                        ))}
                    </ul>
                </div>
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
            </div>
        </div>
    );
}
