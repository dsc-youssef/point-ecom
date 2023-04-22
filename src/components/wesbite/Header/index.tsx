// Dependences
import { FC, useEffect, useRef, useState } from "react";

// Components
import TopHeader from "./components/TopHeader";
import HeaderBody from "./components/HeaderBody";
import HeaderCategory from "./components/HeaderCategory";

// Redux
import { useSelector } from "react-redux";
import { storeMap } from "@/redux/store";

const Header: FC = () => {
  const headerIsOpen = useSelector((state: storeMap) => state.website.header.isOpen);

  return (
    <div className={`header ${headerIsOpen && "active"}`}>
      <TopHeader />
      <HeaderBody />
      <HeaderCategory />
    </div>
  )
}

export default Header;
