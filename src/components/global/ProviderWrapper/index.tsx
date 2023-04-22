// Dependences
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { NextComponentType } from "next";

// Redux
import { store } from "@/redux/store";

// Provider Interface
interface ProviderWrapperProps {
  children: ReactNode
}

const ProviderWrapper: FC<ProviderWrapperProps> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ProviderWrapper;