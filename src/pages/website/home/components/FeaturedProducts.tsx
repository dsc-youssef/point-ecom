// Dependences
import { FC } from "react";

// Components
import ProductCard from "@/components/wesbite/ProductCard";
import BlockTitle from "@/components/wesbite/BlockTitle";


const FeaturedProducts: FC = () => {
  const products = [
    {category: "Smartphones", price: "1200", name: "Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1", image: "images/website/pages/home/products/featured1.png"},
    {category: "Smartphones", price: "60", name: "Mobile Phone Nokia 8210, Dual SIM, 4G", image: "images/website/pages/home/products/featured2.png"},
    {category: "TV & Audio", price: "1200", name: "SONY SRSXV900, Wireless Party Speaker, MEGA BASS", image: "images/website/pages/home/products/featured3.png"},
    {category: "TV & Audio", price: "920", name: "Headphones, Noise cancelling, Bluetooth 5.0", image: "images/website/pages/home/products/featured4.png"},
    {category: "Photo & Video", price: "1100", name: "D-SLR Canon EOS R10, 4k, DIGIC X, RF-S 18-45mm", image: "images/website/pages/home/products/featured5.png"},
  ]


  return (
    <div className="container">
      <div className="inline-flex flex-col my-5 w-full">
        <div className="inline-flex justify-between items-center mb-5">
          <BlockTitle title="Featured Products" />
          <div className="inline-flex items-center gap-[10px]">
            <i className="far fa-angle-left text-2xl text-grey-700 cursor-pointer min-w-[36px]" />
            <i className="far fa-angle-right text-2xl text-grey-700 cursor-pointer min-w-[36px]" />
          </div>
        </div>
        <div className="w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-center items-center">
          {
            products.map((product, index)=> (
              <ProductCard className="flex-1" key={index} category={product.category} name={product.name} image={product.image} price={product.price} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts;
