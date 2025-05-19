import { useState } from "react";
import { images } from "./imageList";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="gallery-container">
      <h1>Recipe Gallery</h1>
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].description}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <p>{images[currentIndex].description}</p>
      <button onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))} disabled={currentIndex === 0}>
        Previous
      </button>

      <button
        onClick={() => setCurrentIndex((i) => Math.min(i + 1, images.length - 1))}
        disabled={currentIndex === images.length - 1}
      >
        Next
      </button>
    </div>
  );
}
