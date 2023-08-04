import { Button, FormControl, FormErrorMessage, Input, Textarea, Text, useToast } from "@chakra-ui/react";
import React, { useState } from 'react';
import styles from './contact.module.scss';
import Head from "next/head";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import { sendContactForm } from "@/lib/api";

interface ContactFormValues {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const initValues: ContactFormValues = {name: "", email: "", subject: "", message: ""};
const initState = {isLoading: false, error: "", values: initValues};

const Contact = () => {
    const toast = useToast();
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
    const {values, isLoading, error} = state;

    const onBlur = ({target}) => setTouched((prev) => ({...prev, [target.name]: true}));
    const handleChange = ({target}) =>
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            },
        }));
    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        try {
            await sendContactForm(values);
            setTouched({});
            setState(initState);
            toast({
                title: "Message sent.",
                status: "success",
                duration: 2000,
                position: "top",
            });
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }));
        }
    };
    return (
        <section className={styles.contact}>
            <Head>
                <title>Yavoriv Oleh | Contact</title>
                <meta
                    property="og:title"
                    content="Yavoriv Oleh | Contact"
                    key="title"
                />
            </Head>
            <div className={styles.contact__container}>
                <div className={styles.wrapper}>
                    <motion.h2
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden">
                        {`Let's`} <span>Connect!</span>
                    </motion.h2>
                    {error && (
                        <Text color="red.300" my={4} fontSize="xl">
                            {error}
                        </Text>
                    )}
                    <motion.div variants={fadeIn("up", 0.6)}
                                initial="hidden"
                                animate="show"
                                className={styles.form}>
                        <div className={styles.form_upblock}>
                            <FormControl isRequired isInvalid={touched.name && !values.name}>
                                <Input type="text" name="name" placeholder="Name" errorBorderColor='red.300'
                                       value={values.name} onChange={handleChange} onBlur={onBlur}/>
                                <FormErrorMessage>Required</FormErrorMessage>
                            </FormControl>
                            <FormControl isRequired isInvalid={touched.email && !values.email}>
                                <Input type="email" name="email" placeholder="Email" errorBorderColor="red.300"
                                       value={values.email} onChange={handleChange} onBlur={onBlur}/>
                                <FormErrorMessage>Required</FormErrorMessage>
                            </FormControl>
                        </div>
                        <FormControl isRequired isInvalid={touched.subject && !values.subject}>
                            <Input type="text" name="subject" placeholder="Subject" errorBorderColor="red.300"
                                   value={values.subject} onChange={handleChange} onBlur={onBlur}/>
                            <FormErrorMessage>Required</FormErrorMessage>

                        </FormControl>
                        <FormControl isRequired isInvalid={touched.message && !values.message}>
                            <Textarea name="message" placeholder="Message" errorBorderColor="red.300"
                                      resize='none' rows={4} value={values.message} onChange={handleChange}
                                      onBlur={onBlur}/>
                            <FormErrorMessage>Required</FormErrorMessage>
                        </FormControl>
                        <Button variant="outline"
                                colorScheme='blue'
                                isLoading={isLoading}
                                disabled={!values.name || !values.email || !values.subject || !values.message}
                                onClick={onSubmit}>
                            {`Let's Talk`}
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
