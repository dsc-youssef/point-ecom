// Dependences
import { FC } from "react";

// Components
import CategoryCard from "./CategoryCard";
import BlockTitle from "@/components/wesbite/BlockTitle";

const CategoriesCards: FC = () => {
  const categorys = [
    { category: "TV & Audio", image: "images/website/pages/home/products/category1.png" },
    { category: "Smartphones", image: "images/website/pages/home/products/category2.png" },
    { category: "Laptops & PCs", image: "images/website/pages/home/products/category3.png" },
    { category: "Gadgets", image: "images/website/pages/home/products/category4.png" },
    { category: "Photo & Video", image: "images/website/pages/home/products/category5.png" },
    { category: "Gifts", image: "images/website/pages/home/products/category6.png" },
    { category: "Books", image: "images/website/pages/home/products/category7.png" },
    { category: "Toys", image: "images/website/pages/home/products/category8.png" }
  ];

  return (
    <div className="bg-grey-100">
      <div className="container">
        <div className="w-full inline-flex flex-col pt-[10px] pb-[60px] w-full">
          <div className="mb-5">
            <BlockTitle title="Categories" />
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
            {
              categorys.map((category, index) => (
                <CategoryCard key={index} category={category.category} image={category.image} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesCards;
