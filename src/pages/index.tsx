// Dependences
import { FC } from "react";

// Components
import Slider from "@/components/wesbite/Slider";


const Home: FC = () => {

  const sliders = [
    { before: "", after: "CONSOLE X245-HD", special: "PLAYBOX", image: "/images/website/pages/home/slider2.png" },
    { before: "KEEP YOUR SHAPE WITH ALL NEW", after: "", special: "GADGETS", image: "/images/website/pages/home/slider3.png" }
  ];

  return (
    <div className="home-page">
      <Slider sliders={sliders} />
    </div>
  )
}

export default Home;
