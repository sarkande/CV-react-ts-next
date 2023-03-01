import styles from "./navBar.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
   return (
      <div className={styles.navBar}>
         <div className={styles.profile}>
            <Image src="/thirteen.svg" alt="13" width={40} height={31} />
            <span>Allan Perez Gonzalez</span>
         </div>
         <div className={styles.menu}>
            <Link href="">Home</Link>
            <Link href="">CV</Link>
            <Link href="">Skills</Link>
            <Link href="">Portfolio</Link>
            <Link href="">Contact</Link>
         </div>
         <div className={styles.network}>
            <Link href="">Github</Link>
            <Link href="">Linkedin</Link>
            <Link href="">Gmail</Link>
         </div>
      </div>
   );
}
