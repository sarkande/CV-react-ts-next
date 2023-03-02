import styles from "./navBar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar({ route }) {
   const router = useRouter();
   console.log(route);
   return (
      <div className={styles.navBar}>
         <div className={styles.navBar__profile}>
            <Image src="/profile.jpg" alt="13" width={60} height={60} />
            <span>Allan Perez Gonzalez</span>
         </div>
         <div className={styles.navBar__menu}>
            <Link href="/">
               <span
                  className={`${styles.navBar__menu_link} ${
                     router.pathname === "/" ? styles.selected : null
                  }`}
               >
                  Home
               </span>
            </Link>
            <Link href="/cv">
               <span
                  className={`${styles.navBar__menu_link} ${
                     router.pathname === "/cv" ? styles.selected : null
                  }`}
               >
                  CV
               </span>
            </Link>
            <Link href="/skills">
               <span
                  className={`${styles.navBar__menu_link} ${
                     router.pathname === "/skills" ? styles.selected : null
                  }`}
               >
                  Skills
               </span>
            </Link>
            <Link href="/portfolio">
               <span
                  className={`${styles.navBar__menu_link} ${
                     router.pathname === "/portfolio" ? styles.selected : null
                  }`}
               >
                  Portfolio
               </span>
            </Link>
            <Link href="/contact">
               <span
                  className={`${styles.navBar__menu_link} ${
                     router.pathname === "/contact" ? styles.selected : null
                  }`}
               >
                  Contact
               </span>
            </Link>
         </div>
         <div className={styles.navBar__network}>
            <Link href="https://github.com/sarkande">
               <Image
                  className={styles.navBar__network_img}
                  src="/github.svg"
                  alt="github"
                  width={30}
                  height={30}
               />
            </Link>
            <Link href="https://www.linkedin.com/in/allan-perez-gonzalez/">
               <Image
                  className={styles.navBar__network_img}
                  src="/linkedin.svg"
                  alt="linkedin"
                  width={30}
                  height={30}
               />
            </Link>
         </div>
      </div>
   );
}
