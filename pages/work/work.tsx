import Head from "next/head";
import styles from './work.module.scss';
import { BrainImg } from "@/components/BrainImg";
import { motion } from "framer-motion";
import { ProjectSlider } from "@/components/ProjectSlider";
import { fadeIn } from "@/variants";

const Work = () => {
    return (
        <section className={styles.work}>
            <Head>
                <title>Yavoriv Oleh | Projects</title>
                <meta
                    property="og:title"
                    content="Yavoriv Oleh | Projects"
                    key="title"
                />
            </Head>
            <BrainImg/>
            <div className={styles.work__container}>
                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <motion.h2 variants={fadeIn("up", 0.3)}
                                   initial="hidden"
                                   animate="show"
                                   exit="hidden">My projects <span>.</span>
                        </motion.h2>
                        <motion.p variants={fadeIn("up", 0.4)}
                                  initial="hidden"
                                  animate="show"
                                  exit="hidden">I show my projects here. Among them are two projects that i did together
                            with the team. Click to see!
                        </motion.p>
                    </div>
                    <motion.div
                        variants={fadeIn('up', 0.6)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className={styles.slider}>
                        <ProjectSlider/>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Work;
