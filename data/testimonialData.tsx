interface Testimonial {
    image: string;
    name: string;
    position: string;
    message: string;
}

export const testimonialData: Testimonial[] = [
    {
        image: "/woman-avatar.jpg",
        name: "Natalya Paranyak",
        position: "Learning and Development Manager | Education Manager",
        message:
            "Oleh demonstrated outstanding effort and growth throughout the IntelliStart program and brought tremendous energy to the course. He has a positive mindset and the confidence that he can constantly improve. Oleh for sure has a high aptitude for programming. He is driven to understand how things work, self-organized for learning new topics, and highly motivated to discover different areas of IT. \n" +
            "\n" +
            "Oleh is a great team player. While creating team projects, he has not only developed front-end tasks but also inspired his teammates and managed responsibilities. He played a significant role, often, in developing and implementing overall web tasks and dealt with the details along with the bigger picture. His coding was excellent, and his vision of work was unique and innovative. Oleh is an obsessive, engaging, and interested student who has always offered a hand to his colleagues during the study. \n" +
            "\n" +
            "Oleh's joyful nature and openness to feedback mean he's constantly learning and growing as a developer, a tremendous strength that will continue to help him well in his future job.",
    },
    {
        image: "/men-avatar.jpg",
        name: "John Doe",
        position: "Lorem | Ipsum",
        message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
];
