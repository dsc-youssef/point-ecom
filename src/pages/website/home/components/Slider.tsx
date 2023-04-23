// Dependeces
import { FC, useEffect, useState } from "react";


// Interface
interface WebsiteHomeSliderProps {
  sliders: {
    after?: string | number;
    before?: string | number;
    special?: string | number;
    image: string;
  }[]
}

const Slider: FC<WebsiteHomeSliderProps> = ({ sliders }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex === sliders.length - 1) {
        setCurrentIndex(0);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex])


  return (
    <div className="slider">
      <div className="container">
        {
          sliders.map((slider, index: number) => (
            <div className={`container slide ${currentIndex === index && "active"}`} key={index}>
              <div className="slide-content">
                <h1 className="title">{slider.before} <span className="font-bold">{slider.special}</span> {slider.after}</h1>
                <button className="btn ">Find Out More</button>
              </div>
              <img className="slide-image" src={slider.image} alt="" />
            </div>
          ))
        }
      </div>
      <div className="slider-mover-buttons">
        {
          sliders.map((slider, index: number) => (
            <span key={index} className={`button relative z-50 ${index === currentIndex && "active"}`} onClick={() => setCurrentIndex(index)}></span>
          ))
        }
      </div>
    </div>
  );
};

export default Slider;


/**
 * 
  {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slider Image ${index}`}
          className={`absolute  top-0 left-0 h-full w-full  ${index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}
      <button
        className="absolute top-1/2 left-2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full transform -translate-y-1/2 hover:bg-opacity-75 transition-colors duration-300"
        onClick={previousImage}
      >
        {"<"}
      </button>
      <button
        className="absolute top-1/2 right-2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full transform -translate-y-1/2 hover:bg-opacity-75 transition-colors duration-300"
        onClick={nextImage}
      >
        {">"}
      </button>
 */
