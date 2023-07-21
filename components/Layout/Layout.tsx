import { Nav } from "@/components/Nav";
import { Header } from "@/components/Header";
import { TopLeftImg } from "@/components/TopLeftImg";
import styles from './Layout.module.scss';

export const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <TopLeftImg/>
            <Nav/>
            <Header/>
            {children}
        </div>
    );
};
