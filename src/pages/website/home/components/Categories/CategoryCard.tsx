// Dependences
import { FC } from "react";

// Interface
interface WebsiteHomeCategoryCardProps {
  category: string,
  image: string
}

const CategoryCard: FC<WebsiteHomeCategoryCardProps> = ({ category, image }) => {
  return (
    <div className="rounded-[6px] bg-white p-5 inline-flex flex-col justify-center items-center gap-5 min-w-[220px] w-full h-full">
      <h1 className="text-h6 line-clamp-1 font-medium" >{category}</h1>
      <img className="w-100 object-center my-auto" src={image} alt="" />
      <i className="fas fa-angle-right self-end inline-flex items-center justify-center rounded-full h-[36px] text-white w-[36px] bg-grey-200 cursor-pointer align-self-end"></i>
    </div>
  )
}

export default CategoryCard;
