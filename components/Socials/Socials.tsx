import Link from "next/link";
import { socialsData } from "@/data/socialsData";
import styles from './Socials.module.scss';

export const Socials = () => {
    return (
        <div>
            <ul className={styles.socials__list}>
                {socialsData.map((item, index) => {
                    return <li key={index}><Link href={item.link}>{item.icon}</Link></li>
                })}
            </ul>
        </div>
    );
};
