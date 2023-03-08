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
            <Link href="">Download as PDF</Link>
         </div>
      </>
   );
}
