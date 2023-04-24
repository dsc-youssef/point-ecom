// Dependences
import { FC } from "react";

// Banner Card Interface
interface BannerCardProps {
  image: string,
  title: string,
  special?: string,
  wrapper?: boolean
}

const BannerCard: FC<BannerCardProps> = ({ image, title, wrapper, special }) => {
  return (
    <div className={`w-full bg-grey-100 inline-flex items-center justify-center ${wrapper && "flex-col"} flex-wrap md:flex-nowrap gap-[10px] rounded-md py-10 px-5 mb-[60px]`}>
      <h1 className="text-h2">{title} <span className="font-bold">{special}</span></h1>
      <img className="object-center" src={image} alt="" />
    </div>
  )
}

export default BannerCard;

