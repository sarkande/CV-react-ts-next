import type { AppProps } from "next/app";
import { NavBar } from "@/components/NavBar";
import "../styles/reset.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
   const route = [
      { key: "", value: "" },
      { key: "", value: "" },
      { key: "", value: "" },
      { key: "", value: "" },
   ];

   return (
      <>
         <NavBar route={route} />
         <Component {...pageProps} />
      </>
   );
}
export default MyApp;
