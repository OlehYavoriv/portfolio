import React, { useCallback } from "react";
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import styles from './ParticlesContainer.module.scss';


export const ParticlesContainer = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async () => {
    }, []);
    return (
        <Particles
            id="tsparticles"
            className={styles.particles}
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {enable: false},
                background: {
                    color: {value: ""},
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 40,
                        },
                        repulse: {
                            distance: 120,
                            duration: 0.8,
                        },
                    },
                },
                particles: {
                    color: {value: "#e68e2e"},
                    links: {
                        color: "#f5d393",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {enable: true, area: 800},
                        value: 100,
                    },
                    opacity: {value: 0.5},
                    shape: {type: "circle"},
                    size: {value: {min: 1, max: 5}},
                },
                detectRetina: true,
            }}
        />
    );
};
