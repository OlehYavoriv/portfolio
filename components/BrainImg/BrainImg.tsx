import Image from "next/image";
import styles from './BrainImg.module.scss';

export const BrainImg = () => {
    return (
        <div className={styles.brain_img}>
            <Image src={'/brain.png'} width={260} height={200} alt='Brain image'/>
        </div>
    );
};
