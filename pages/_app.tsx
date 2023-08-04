import '@/styles/global.scss';
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
