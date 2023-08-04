import Head from "next/head";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import styles from './testimonials.module.scss';

const Testimonials = () => {
    return (
        <section className={styles.testimonials}>
            <Head>
                <title>Yavoriv Oleh | Testimonials</title>
                <meta
                    property="og:title"
                    content="Yavoriv Oleh | Testimonials"
                    key="title"
                />
            </Head>
            <div className={styles.testimonials__container}>
                <motion.h2
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden">
                    Recommendations <span>.</span>
                </motion.h2>
                <motion.div
                    variants={fadeIn("up", 0.8)}
                    initial="hidden"
                    animate="show"
                    exit="hidden">
                    <TestimonialSlider/>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
