interface Project {
    liveDemo: string;
    gitHub: string;
    title: string;
    path: string;
}

interface Slide {
    projects: Project[];
}

interface ProjectSlides {
    slides: Slide[];
}

export const projectSlides: ProjectSlides = {
    slides: [
        {
            projects: [
                {
                    liveDemo: 'https://delightful-puppy-9268fb.netlify.app/',
                    gitHub: 'https://github.com/OlehYavoriv/weather-app',
                    title: "Weather-app",
                    path: "/weather-app.png",
                },
                {
                    liveDemo: 'https://intellistart-wallet-sixth-team.netlify.app/',
                    gitHub: 'https://github.com/vitaliihoroshko/intellistart-wallet',
                    title: "Wallet-application for personal budget tracking",
                    path: "/wallet-app.png",
                },
                {
                    liveDemo: '',
                    gitHub: 'https://github.com/OlehYavoriv/Armors',
                    title: "Armors",
                    path: "/armors-shop.png",
                },
                {
                    liveDemo: '',
                    gitHub: 'https://github.com/OlehYavoriv/YavShop',
                    title: "YavShop",
                    path: "/yav-shop.png",
                },
            ],
        },
        {
            projects: [
                {
                    liveDemo: 'https://olehyavoriv.github.io/MotorsBoat-project/',
                    gitHub: 'https://github.com/OlehYavoriv/MotorsBoat-project',
                    title: "MotorsBoat",
                    path: "/motors-boat.png",
                },
                {
                    liveDemo: '',
                    gitHub: 'https://github.com/VolodymyrDidur/reserwise',
                    title: "Reserwise",
                    path: "/reserwise.png",
                },
                {
                    liveDemo: '',
                    gitHub: 'https://github.com/OlehYavoriv/Future-shop',
                    title: "Future-shop",
                    path: "/future.jpg",
                },
                {
                    liveDemo: 'https://olehyavoriv.github.io/Desire-project/dist/',
                    gitHub: 'https://github.com/OlehYavoriv/Desire-project',
                    title: "Desire project",
                    path: "/desire.png",
                },

            ],
        },
        {
            projects: [
                {
                    liveDemo: 'https://quirky-jang-f04768.netlify.app/',
                    gitHub: 'https://github.com/OlehYavoriv/JS-projects/tree/main/02-Movie-app',
                    title: "MovieApp",
                    path: "/movie-app.png",
                },
                {
                    liveDemo: 'https://olehyavoriv.github.io/ToDo-List/',
                    gitHub: 'https://github.com/OlehYavoriv/ToDo-Listco',
                    title: "ToDo List",
                    path: "/todo-list.png",
                },
                {
                    liveDemo: 'https://gifted-joliot-ccd61d.netlify.app/',
                    gitHub: 'https://github.com/OlehYavoriv/JS-projects/tree/main/01-Counter',
                    title: "Counter",
                    path: "/counter.png",
                },
                {
                    liveDemo: 'https://blissful-babbage-cbbe5c.netlify.app/',
                    gitHub: 'https://github.com/OlehYavoriv/JS-projects/tree/main/04-Stopwatch',
                    title: "StopWatch",
                    path: "/stopwatch.png",
                },
            ],
        },
        {
            projects:
                [
                    {
                        liveDemo: 'https://vigorous-wing-7b9029.netlify.app/',
                        gitHub: 'https://github.com/OlehYavoriv/JS-projects/tree/main/03-Dark%20toggle',
                        title: "Dark/Light Theme",
                        path: "/dark-light-theme.png",
                    },
                ]
        }
    ],
};
