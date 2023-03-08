import styles from "./navBar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
   route: { path: string; value: string }[];
};

export default function NavBar({ route }: Props) {
   const router = useRouter();

   return (
      <div className={styles.navBar}>
         <div className={styles.navBar__profile}>
            <Image src="/profile.jpg" alt="13" width={60} height={60} />
            <span>Allan Perez Gonzalez</span>
         </div>
         <div className={styles.navBar__menu}>
            {route.map((e: { path: string; value: string }) => {
               return (
                  <Link href={e.path} key={e.path}>
                     <span
                        className={`${styles.navBar__menu_link} ${
                           router.pathname === e.path ? styles.selected : null
                        }`}
                     >
                        {e.value}
                     </span>
                  </Link>
               );
            })}
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
