import React, { useContext, useEffect, useState } from 'react';
import PageContext from '../context/PageContext';



function ProductContent() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const {page, setPage} = useContext(PageContext);

    const images = [
      require("../assets/images/univ/x3.webp"),
      require("../assets/images/univ/x4.webp"),
      require("../assets/images/univ/x5.webp"),
    ];
   
  
    const handleDotClick = (index) => {
      setCurrentSlide(index);
    };
    useEffect(() => {
      setPage(() => "");
    }, [setPage]);






  return (
    <div className="product-content">
      <div className="section section-bg">
        <div className="column image-column">
        <p className='barcode left-spacing nlb-spacing'>NLB 225 SERIES WATER JETTING PUMP</p>
          <img src={require("../assets/images/univ/x1.webp")} alt="Placeholder" className='p-image1 p-image1-spacing'/>
        </div>
        <div className="column text-column rajdhani-semibold">
          <p  className='list-paragraph-1 left-spacing-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit diam quam nisi ut pellentesque nec cursus habitant nec lobortis ac placerat non, urna tempus luctus lobortis sed dui nisl.</p>
          <ul>
            <li className='bullet-list left-spacing-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className='bullet-list left-spacing-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className='bullet-list left-spacing-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className='bullet-list left-spacing-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
      </div>


      <div className="divider"></div>
      <div className="section section-bg">
      <div className="column text-column rajdhani-semibold">
          <p  className='list-paragraph-2 left-spacing-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit diam quam nisi ut pellentesque nec cursus habitant nec lobortis ac placerat non, urna tempus luctus lobortis sed dui nisl.</p>
          <ul>
            <li className='bullet-list left-spacing-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className='bullet-list left-spacing-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className='bullet-list left-spacing-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className='bullet-list left-spacing-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
        <div className="column image-column spir-barcode">
            <p className='barcode'>SPIR STAR HIGH PRESSURE HOSE</p>
          <img src={require("../assets/images/univ/x2.webp")} alt="Placeholder" className='p-image2'/>
        </div>
      </div>

      
      <div className="divider"></div>





<div className="App">
      <div className="section section-bg">
        <div className="column slider-column">


          <div className='slider-container'>
          <div className="slider">
          <p className='barcode conjet-spacing'>CONJET ROBOT 557</p>
            {images.map((image, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="slider-dots">
            {images.map((_, index) => (
              <React.Fragment key={index}>
                <span
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                ></span>
                {index < images.length - 1 && <div className="line"></div>}
              </React.Fragment>
            ))}
          </div>
          </div>
        </div>
        <div className="column text-column rajdhani-semibold">
          <p  className='list-paragraph-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit diam quam nisi ut <br />pellentesque nec cursus habitant nec lobortis ac placerat non, urna <br />tempus luctus lobortis sed dui nisl.</p>
          <ul>
            <li className='bullet-list left-spacing-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className='bullet-list left-spacing-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className='bullet-list left-spacing-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className='bullet-list left-spacing-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProductContent;
