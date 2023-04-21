// Dependences
import { useState, useEffect } from "react";
import type { AppProps } from 'next/app'

// Hooks
import { useRouter } from 'next/router';

// Layouts and Components
import ProviderWrapper from '@/components/global/ProviderWrapper';
import WebsiteLayout from "@/layouts/website";
import DashboardLayout from "@/layouts/dashboard";


// Assets
import "~/libs/fontawesome/css/all.min.css";
import "@/styles/style.scss";


export default function App({ Component, pageProps }: AppProps) {
  const [layout, setLayout] = useState<string>("");
  const router = useRouter();

  // Set Layout
  useEffect(() => {
    if (router.route.search("/dashboard") >= 0) {
      setLayout("dashboard");
    } else {
      setLayout("website");
    }
  }, [router.route])


  return (
    <ProviderWrapper>
      {
        layout === "dashboard" ?
          (
            <DashboardLayout>
              <Component {...pageProps} />
            </DashboardLayout>
          ) : (
            <WebsiteLayout>
              <Component {...pageProps} />
            </WebsiteLayout>
          )
      }
    </ProviderWrapper>
  )
}
