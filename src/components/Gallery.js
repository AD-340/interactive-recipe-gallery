import React, { useState } from 'react';
import { images } from '../imageList'; 
import './Gallery.css';

function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const currentImage = images[currentIndex];
  
    return (
      <div className="gallery-container">
        <img src={currentImage.url} alt={currentImage.description} />
        <p>{currentImage.description}</p>

        <button onClick={() => setCurrentIndex(currentIndex - 1)} disabled={currentIndex <= 0}>Previous</button>
        <button onClick={() => setCurrentIndex(currentIndex + 1)} disabled={currentIndex >= images.length - 1}>Next</button>

      </div>
    );
  }

export default Gallery;

  