import '@/styles/global.scss';
import Head from "next/head";
import { Layout } from "@/components/Layout";
import { useRouter } from 'next/router';
import { Transition } from "@/components/Transition";
import { AnimatePresence, motion } from 'framer-motion';
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (
        <ChakraProvider>
            <Layout>
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                </Head>
                <AnimatePresence mode='wait'>
                    <motion.div key={router.route}>
                        <Transition/>
                        <Component {...pageProps} />
                    </motion.div>
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default MyApp;
