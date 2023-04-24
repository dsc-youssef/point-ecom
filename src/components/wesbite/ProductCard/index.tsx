// Dependences
import { FC } from "react";

// Interface
export interface WebsiteProductCardProps {
  category: string,
  name: string,
  image: string,
  price: string | number,
  discount?: string | number,
  className?: string,
  key?: string | number
}

const ProductCard: FC<WebsiteProductCardProps> = ({ category, name, image, price, discount, className, key }) => {
  return (
    <div className={`${className} productCard`}>
      <span className="category">{category}</span>
      <h1 className="name" title={name}>{name}</h1>
      <img className="image" src={image} alt={name} />
      <div className="footer">
        {
          !discount ? (
            <h4 className="price">${Number(price).toFixed(2)}</h4>
          ) : (
            <div className="inline-flex flex-col">
              <h4 className="price text-danger-600">${Number(price).toFixed(2)}</h4>
              <small className="text-p2 line-through">${Number(discount).toFixed(2)}</small>
            </div>
          )
        }
        <i className="fas fa-bag-shopping button" />
      </div>
    </div>
  )
}

export default ProductCard;
