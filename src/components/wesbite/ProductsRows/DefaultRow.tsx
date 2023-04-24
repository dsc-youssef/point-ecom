// Dependences
import { FC } from "react";

// Components
import ProductCard from "../ProductCard";

// Interface
import { WebsiteProductCardProps } from "../ProductCard";
interface WebsiteDefaultProductsRowProps {
  products: WebsiteProductCardProps[]
}

const DefaultRow:FC<WebsiteDefaultProductsRowProps> = ({ products })=>{
  return (
    <div className="w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-center items-center">
      {
        products.map((product, index)=> (
          <ProductCard className="flex-1" discount={product?.discount} key={index} category={product.category} name={product.name} image={product.image} price={product.price} />
        ))
      }
    </div>
  )
}

export default DefaultRow;
