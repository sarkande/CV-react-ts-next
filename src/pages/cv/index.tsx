import { NavBar } from "@/components/NavBar";
import Head from "next/head";
import Link from "next/link";

export default function CV() {
   return (
      <>
         <Head>
            <title>CV</title>
         </Head>
         <div>
         <a
            href="/files/CV_2023.pdf"
            target="_blank"
            rel="noopener noreferrer"
         >Télécharger en PDF</a>

            <div className="cv-detail">
               <div className="left-panel">
                  <div className="left-panel__profile_picture"></div>
                  <div className="left-panel__profile_address"></div>
                  <div className="left-panel__profile_language"></div>
                  <div className="left-panel__profile_hobby"></div>
               </div>
               <div className="right-panel">
                  <div className="right-panel__title"></div>
                  <div className="right-panel__profile_resume"></div>
                  <div className="right-panel__profile_skill"></div>
                  <div className="right-panel__profile_experience"></div>
                  <div className="right-panel__profile_school"></div>
               </div>
            </div>
         </div>
      </>
   );
}
