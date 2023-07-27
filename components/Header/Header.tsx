import Link from 'next/link';
import styles from './Header.module.scss';
import { Socials } from "@/components/Socials";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.logo}>
                    <Link href={'/'}>
                        <span className={styles.logo__text}>
                            <span>Yavoriv</span> Oleh
                        </span>
                    </Link>
                    <Socials/>
                </div>
            </div>
        </header>
    );
};
