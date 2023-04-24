// Dependences
import { FC } from "react";

// Components
import DefaultRow from "@/components/wesbite/ProductsRows/DefaultRow";
import BlockTitle from "@/components/wesbite/BlockTitle";


const FeaturedProducts: FC = () => {
  const products = [
    { category: "Smartphones", price: "1200", name: "Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1", image: "images/website/pages/home/products/featured1.png" },
    { category: "Smartphones", price: "60", name: "Mobile Phone Nokia 8210, Dual SIM, 4G", image: "images/website/pages/home/products/featured2.png" },
    { category: "TV & Audio", price: "1200", name: "SONY SRSXV900, Wireless Party Speaker, MEGA BASS", image: "images/website/pages/home/products/featured3.png" },
    { category: "TV & Audio", price: "920", name: "Headphones, Noise cancelling, Bluetooth 5.0", image: "images/website/pages/home/products/featured4.png" },
    { category: "Photo & Video", price: "1100", name: "D-SLR Canon EOS R10, 4k, DIGIC X, RF-S 18-45mm", image: "images/website/pages/home/products/featured5.png" },
  ]


  return (
    <div className="container">
      <div className="inline-flex flex-col my-5 mb-10 w-full">
        <BlockTitle title="Featured Products" angles={true} />
        <DefaultRow products={products} />
      </div>
    </div>
  )
}

export default FeaturedProducts;
