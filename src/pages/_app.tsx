import type { AppProps } from "next/app";
import { NavBar } from "@/components/NavBar";
import "../styles/reset.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
   const route: { path: string; value: string }[] = [
      { path: "/", value: "Accueil" },
      { path: "/cv", value: "CV" },
      { path: "/skills", value: "Compétences" },
      { path: "/portfolio", value: "Portfolio" },
   ];
   return (
      <>
         <NavBar route={route} />
         <Component {...pageProps} />
      </>
   );
}
export default MyApp;
