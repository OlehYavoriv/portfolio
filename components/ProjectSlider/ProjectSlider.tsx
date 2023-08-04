import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { projectSlides } from "@/data/projectsData";
import styles from './ProjectSlider.module.scss';


export const ProjectSlider = () => {
    return (
        <Swiper
            spaceBetween={15}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className={styles.swiper}>
            {
                projectSlides.slides.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className={styles.swiper__wrapper}>
                                {slide.projects.map((item, index) => {
                                    return (
                                        <div className={styles.slide_container} key={index}>
                                            <div className={styles.slide_container__item}>
                                                <Image src={item.path} width={500} height={300} alt={item.title}/>
                                                <div className={styles.overlay}>
                                                    <div className={styles.links}>
                                                        <Link href={item.liveDemo}
                                                              target="_blank">{item.liveDemo ? 'Live Demo' : ''}</Link>
                                                        <Link href={item.gitHub} target="_blank">Code</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>
    );
};


