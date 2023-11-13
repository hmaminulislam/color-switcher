import React from 'react';
import './hero.css';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons';

function Hero() {

    // Typeing js 
    const typeHeading = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(typeHeading.current, {
          strings: ['Kerri Deo', 'a Photographer.', 'a Graphic Designer.'],
          typeSpeed: 200,
          shuffle: false,
          loop: true,
          loopCount: Infinity,
          fadeOut: true,
          fadeOutClass: 'typed-fade-out',
          fadeOutDelay: 0,
          backDelay: 1000,
        });
    
        return () => {
          typed.destroy();
        };
      }, []);

  return (
    <div className='hero'>
        <div className='hero-wrapper'>
            <h3 className='sub-title'>Welcome</h3>
            <h2 className='type-text'>
                <span>I'm </span>
                <span ref={typeHeading}></span>
            </h2>
           <p className='paragraph-medium text-center'>A photographer is a skilled professional or hobbyist who uses a camera to capture and create visually compelling images. Through a keen understanding of composition, lighting, and subject matter, photographers aim to convey emotions, tell stories, or document events.</p>
           <button className='button button-hero'>DOWNLOAD CV</button>
           <FontAwesomeIcon className='hero-down-arrow' icon={faHandPointDown} />
        </div>
    </div>
  )
}

export default Hero