import React, { useState, useEffect } from "react";

function App() {
  const images = [
    "https://picsum.photos/id/1011/900/400",
    "https://picsum.photos/id/1025/900/400",
    "https://picsum.photos/id/1035/900/400",
    "https://picsum.photos/id/1045/900/400"
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div style={{ width: "900px", margin: "50px auto", textAlign: "center" }}>
      <h1>React Image Slider</h1>

      <div style={{ position: "relative" }}>
        <img
          src={images[current]}
          alt="slider"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "10px"
          }}
        />

        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            padding: "10px"
          }}
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            padding: "10px"
          }}
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default App;