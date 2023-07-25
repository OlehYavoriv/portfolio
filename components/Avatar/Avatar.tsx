import Image from 'next/image';
import styles from './Avatar.module.scss';

export const Avatar = () => {
    return (
        <div className={styles.avatar}>
            <Image src={'/avatar-img.png'} width={700} height={700} alt={'Avatar'}/>
        </div>
    );
};
