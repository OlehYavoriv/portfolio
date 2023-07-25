import styles from './index.module.scss';
import { motion } from 'framer-motion';
import { fadeIn } from "@/variants";
import { ProjectsBtn } from "@/components/ProjectsBtn";
import { Avatar } from "@/components/Avatar";
import { ParticlesContainer } from "@/components/ParticlesContainer";

const Home = () => {
    return (
        <section className={styles.home}>
            <div className={styles.home__container}>
                <div className={styles.home__main_text}>
                    <motion.div className={styles.home__title} variants={fadeIn("down", 0.2)}
                                initial="hidden"
                                animate="show"
                                exit="hidden">
                        <h1>Hi, I'm Oleh Yavoriv</h1>
                        <div className={styles.text__animate}><h3>Frontend Developer</h3></div>
                    </motion.div>
                    <motion.p variants={fadeIn("down", 0.3)}
                              initial="hidden"
                              animate="show"
                              exit="hidden" className={styles.home__subtitle}>
                        I am a proactive and motivated candidate,
                        ready to take on challenges and achieve goals. Strong creative and analytical skills. Team
                        player with an eye for detail.
                    </motion.p>
                    <div className={styles.projects__btn}>
                        <ProjectsBtn/>
                    </div>
                    <motion.div variants={fadeIn("down", 0.4)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className={styles.projects__btn_animated}>
                        <ProjectsBtn/>
                    </motion.div>
                </div>
            </div>
            <div className={styles.home__bg}>
                <div className={styles.home__bg_container}></div>
                <div className={styles.particles}>
                    <ParticlesContainer/>
                </div>
                <motion.div className={styles.avatar} variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            transition={{duration: 1, ease: 'easeInOut'}}>
                    <Avatar/>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
