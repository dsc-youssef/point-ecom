// Dependences
import { FC } from "react";

// Components
import SelectDropdown from "@/components/global/SelectDropdown";

const HeaderCategory: FC = () => {

  const categoriesDrops = [
    [{ value: "TV & Audio" }, { value: "other option" }],
    [{ value: "Smart phones" }, { value: "other option" }],
    [{ value: "Laptops & PCs" }, { value: "other option" }],
    [{ value: "Gadgets" }, { value: "other option" }],
    [{ value: "Photo & Video" }, { value: "other option" }],
    [{ value: "Gifts" }, { value: "other option" }],
    [{ value: "Books" }, { value: "other option" }],
    [{ value: "Toys" }, { value: "other option" }]
  ]

  return (
    <div className="header-category">
      <div className="container">
        <h1 className="block-title">Categories</h1>
        {
          categoriesDrops.map((category, key) => (
            <SelectDropdown className="category-select-box" key={key} options={category} />
          ))
        }
      </div>
    </div>
  )
}

export default HeaderCategory;
