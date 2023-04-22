// Dependences
import { FC } from "react";
import Link from "next/link";

// Components
import SelectDropdown from "@/components/global/SelectDropdown";

const TopHeader: FC = () => {

  const languageOptions = [
    { value: "Language" },
    { value: "Arabic" },
    { value: "English" },
  ]
  const currencyOptions = [
    { value: "Currency" },
    { value: "EGP" },
    { value: "USD" },
  ]

  return (
    <div className="top-header">
      <div className="container">

        <div className="btn-group">
          <SelectDropdown className="placeholder-button" options={languageOptions} toggleLabel={<i className="fas fa-globe" />} />
          <SelectDropdown className="placeholder-button" options={currencyOptions} toggleLabel={<i className="fas fa-circle-dollar" />} />
        </div>
        <div className="btn-group">
          <div className="social-icons placeholder-button">
            <i className="fab fa-facebook" />
            <i className="fab fa-instagram" />
            <i className="fab fa-linkedin" />
            <i className="fab fa-twitter" />
            <i className="fab fa-youtube" />
          </div>
          <div className="placeholder-button">
            <Link href="/shop" className="link-button">
              <i className="fas fa-location-dot" />
              Track Order
            </Link>
          </div>
          <div className="placeholder-button">
            <Link href="/shop" className="link-button">
              <i className="fas fa-cog" />
              Settings
            </Link>
          </div>
          <div className="placeholder-button">
            <Link href="/shop" className="link-button">
              <i className="fas fa-shop" />
              Shop
            </Link>
          </div>
          <div className="placeholder-button">
            <Link href="/shop" className="link-button">
              FAQ
            </Link>
          </div>
        </div>
        <h1 className="block-title">Pages</h1>
      </div>

    </div>
  )
}

export default TopHeader;
