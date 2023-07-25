import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';
import styles from './ProjectsBtn.module.scss';

export const ProjectsBtn = () => {
    return (
        <div className={styles.projects__btn}>
            <Link href={'/work'}>
                <Image className={styles.projects__btn_image} src={'/rounded-text.png'} width={141} height={148}
                       alt={'My projects'}/>
                <HiArrowRight className={styles.arrow__icon}/>
            </Link>
        </div>
    );
};
