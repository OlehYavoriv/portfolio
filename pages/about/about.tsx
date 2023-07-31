import React, { useState } from 'react';
import Head from "next/head";
import styles from './about.module.scss';
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { CirclesImg } from "@/components/CirclesImg";
import { aboutData } from "@/data/aboutData";
import CountUp from "react-countup";

const About = () => {
    const [index, setIndex] = useState(0);

    return (
        <section className={styles.about}>
            <Head>
                <title>Yavoriv Oleh | About</title>
                <meta
                    property="og:title"
                    content="Yavoriv Oleh | About"
                    key="title"
                />
            </Head>
            <CirclesImg/>
            <div className={styles.about__container}>
                <div className={styles.text__container}>
                    <motion.h2 variants={fadeIn("right", 0.2)}
                               initial="hidden"
                               animate="show"
                               exit="hidden"> Traforming Ideas <br/> Into{" "}
                        <span>Digital Reality</span></motion.h2>
                    <motion.p variants={fadeIn("right", 0.4)}
                              initial="hidden"
                              animate="show"
                              exit="hidden">Three years ago, I began to immerse myself in the frontend sphere. My
                        experience is primarily based on self-learning various technologies for development. I am always
                        open to new challenges and opportunities, and I am ready to contribute my skills to the
                        development of digital products.
                    </motion.p>
                    <motion.div variants={fadeIn("right", 0.6)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className={styles.countup__info}>

                        <div className={styles.countup__info_container}>
                            <div className={styles.projects}>
                                <div className={styles.countup}>
                                    <CountUp start={0} end={9} duration={5}/> +
                                </div>
                                <div className={styles.countup__text}>
                                    Finished project
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div variants={fadeIn("left", 0.4)}
                            initial="hidden"
                            animate="show"
                            exit="hidden" className={styles.info__container}>
                    <div className={styles.info__tab}>
                        {aboutData.map((item, itemIndex) => {
                            return (
                                <div key={itemIndex}
                                     className={`${index === itemIndex && styles.active__title} ${styles.info__tab_title}`}
                                     onClick={() => setIndex(itemIndex)}>
                                    {item.title}
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.tab__container}>
                        {aboutData[index].info.map((item, itemIndex) => {
                            return (
                                <div key={itemIndex} className={styles.tab__container_item}>
                                    <h4>{item.title}</h4>
                                    <div>{item.stage}</div>

                                    <div className={styles.icons}>
                                        {item.icons?.map((icon, indIcon) => {
                                            return (
                                                <div key={indIcon}>
                                                    {icon.iconLink}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About
