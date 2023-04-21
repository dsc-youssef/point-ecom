// Dependences
import { FC, ReactNode } from "react";


// Dashboard Layout Interface
interface DashboardLayoutProps {
  children: ReactNode
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}
export default DashboardLayout;
