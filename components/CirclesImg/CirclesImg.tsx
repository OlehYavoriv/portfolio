import Image from 'next/image';
import styles from './CirclesImg.module.scss';

export const CirclesImg = () => {
    return (
        <div className={styles.circles__img}>
            <Image
                src={"/circles.png"}
                width={260}
                height={200}
                alt="Circle image"
            />
        </div>
    );
};
