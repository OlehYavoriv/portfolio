import Link from "next/link";
import { useRouter } from "next/router";
import { navData } from "@/data/navData";
import styles from './Nav.module.scss'

export const Nav = () => {
    const router = useRouter();
    const pathname = router.pathname;

    return (
        <nav className={styles.nav}>
            <div className={styles.nav__items}>
                {navData.map((link, index) => {
                    return <Link href={link.path} key={index}
                                 className={`${styles.nav__items_link} ${link.path === pathname ? styles.link__active : ''}`}>
                        <div className={styles.tooltip}>
                            <div className={styles.tooltip__container}>
                                <p className={styles.tooltip__container_text}>{link.name}</p>
                                <div className={styles.tooltip__triangle}></div>
                            </div>
                        </div>
                        <div>
                            {link.icon}
                        </div>
                    </Link>
                })}
            </div>
        </nav>
    );
};
