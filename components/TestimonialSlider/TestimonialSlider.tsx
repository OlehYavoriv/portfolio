import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import { testimonialData } from "@/data/testimonialData";
import styles from './TestimonialSlider.module.scss';

export const TestimonialSlider = () => {
    const [expandedTestimonials, setExpandedTestimonials] = useState([]);
    const handleExpand = (index) => {
        if (expandedTestimonials.includes(index)) {
            setExpandedTestimonials(expandedTestimonials.filter(item => item !== index));
        } else {
            setExpandedTestimonials([...expandedTestimonials, index]);
        }
    };

    return (
        <Swiper
            navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className={styles.swiper}>
            {testimonialData.map((person, index) => (
                <SwiperSlide key={index}>
                    <div className={styles.swiper__container}>
                        <div className={styles.info_container}>
                            <div className={styles.person_info}>
                                <div className={styles.person_info__image}>
                                    <Image src={person.image} width={100} height={100} alt={person.name}/>
                                </div>
                                <h3>{person.name}</h3>
                                <p>{person.position}</p>
                            </div>
                        </div>
                        <div className={styles.testimonial_container}>
                            <div className={styles.quote}>
                                <FaQuoteLeft className={styles.quote__icon}/>
                            </div>
                            <p className={styles.testimonial}>
                                {expandedTestimonials.includes(index) || person.message.length < 300
                                    ? person.message
                                    : `${person.message.substring(0, 300)} ... `}
                                {person.message.length >= 300 && (
                                    <span onClick={() => handleExpand(index)}>
                                        {expandedTestimonials.includes(index) ? "Read less" : "Read more"}
                                    </span>
                                )}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
