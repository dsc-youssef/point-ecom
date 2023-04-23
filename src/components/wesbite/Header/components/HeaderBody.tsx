// Dependences
import { FC } from "react";
import Link from "next/link";

// Components
import SelectDropdown from "@/components/global/SelectDropdown";

// Redux
import headerSlicer from "@/redux/website/reducers/header";
import { store } from "@/redux/store";

const HeaderBody: FC = () => {

  const categoryOptions = [
    { value: "All Categories" },
    { value: "Smartphones" },
    { value: "Laptops & PCs" },
    { value: "Gadgets" },
    { value: "Photo & Video" },
    { value: "Gifts" },
    { value: "Books" },
    { value: "Toys" }
  ];

  const handleToggleHeader = () => {
    store.dispatch(headerSlicer.actions.toggleOpen());
  }


  return (
    <div className="header-body">
      <div className="container">

        <div className="logo-area">
          <i className="far fa-bars toggle-button" onClick={handleToggleHeader} />
          <img src={"/images/global/logo-dark.png"} alt="logo" />
        </div>
        <form className="search-area">
          <div className="input-field">
            <input type="text" className="form-control" placeholder="Search for products" />
            <SelectDropdown className="select-box" options={categoryOptions} />
          </div>
          <button className="far fa-search btn"></button>
        </form>
        <div className="special-buttons">
          <button className="fas fa-user"></button>
          <button className="fas fa-code-compare"></button>
          <button className="fas fa-heart"></button>
          <Link href="/cart">
            <button className="fas fa-bag-shopping"> $ <span>0.00</span></button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderBody;
