import { ReactElement } from "react";
import { RiLinkedinLine, RiGithubLine, RiInstagramLine, RiFacebookLine } from "react-icons/ri";

interface SocialsItems {
    link: string;
    icon: ReactElement;
}

export const socialsData: SocialsItems[] = [
    {
        link: 'https://www.linkedin.com/in/oleh-yavoriv/',
        icon: <RiLinkedinLine/>
    },
    {
        link: 'https://github.com/OlehYavoriv',
        icon: <RiGithubLine/>,
    },
    {
        link: 'https://www.instagram.com/olegyavoriv/',
        icon: <RiInstagramLine/>,
    },
    {
        link: 'https://www.facebook.com/profile.php?id=100008920990626',
        icon: <RiFacebookLine/>,
    },
]
