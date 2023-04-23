// Dependences
import { FC } from "react";

// Interface
interface WebsiteProductCardProps {
  category: string,
  name: string,
  image: string,
  price: string | number,
  className?: string,
  key?: string | number
}

const ProductCard: FC<WebsiteProductCardProps> = ({ category, name, image, price, className, key }) => {
  return (
    <div key={key} className={`${className} inline-flex flex-col gap-5 p-5 rounded-[6px] border min-w-[200px] w-full h-full`}>
      <span className="text-p2 text-grey-700">{category}</span>
      <h1 className="text-p1 font-medium text-primary-700 line-clamp-2" title={name}>{name}</h1>
      <img className="w-full object-center my-auto" src={image} alt={name} />
      <div className="inline-flex items-center justify-between w-full">
        <h4 className="text-h5 font-bold">${Number(price).toFixed(2)}</h4>
        <i className="fas fa-bag-shopping inline-flex items-center justify-center rounded-full h-[36px] text-white w-[36px] bg-grey-200 cursor-pointer" />
      </div>
    </div>
  )
}

export default ProductCard;
