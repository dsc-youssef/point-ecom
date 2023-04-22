// Dependences
import { FC, ReactNode } from "react";

// Components
import Footer from "@/components/wesbite/Footer";
import Header from "@/components/wesbite/Header";


// Website Layout Interface
interface WebsiteLayoutProps {
  children: ReactNode
}

const WebsiteLayout: FC<WebsiteLayoutProps> = ({ children }) => {
  return (
    <div className={`${process.env.website_prefix}`}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default WebsiteLayout;
