import Image from 'next/image'
import Spark from '@/public/spark-top-left-img.jpg';
import styles from './TopLeftImg.module.scss'

export const TopLeftImg = () => {
    return (
        <div className={styles.image__container}>
            <Image src={Spark} width={400} height={400} alt='Spark'/>
        </div>
    );
};
