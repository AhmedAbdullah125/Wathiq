'use client'
import React, { useEffect, useState } from 'react';
import { Input } from '../ui/input';
import ReCAPTCHA from "react-google-recaptcha"
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import validator from "validator";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import PhnoeInput from 'react-phone-number-input'; // Importing a phone number input component.
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { motion } from 'framer-motion'; // Importing the motion component from Framer Motion for animations
import axios from 'axios';
import Loading from '@/app/loading';
import { Textarea } from '../ui/textarea';
import { comment } from 'postcss';
export default function FormPage(props) {
    // const [loading, setLoading] = useState(true); // State for loading indicator
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [language, setLanguage] = useState('en');  // Default language is 'en'
    let [passedData, setPassedData] = useState({});
    const sendPostRequest = async (data) => {
        const url = 'https://wathiq.io/api/place-order';
        console.log(data);
        const queryParams = {
            customer_name: data?.name,
            customer_mobile: data?.phone,
            customer_organization_size: data.destniation,
            customer_notes: data.comments,
        };
        return axios({
            method: 'post',
            url: url,
            data: queryParams,
            headers: {
                lang: 'en',
            },
        }).then(response => {
            // setDone(true);
            router.push('/congats');
            // document.querySelector('html').style.overflow = 'hidden';
            // const interval = setInterval(() => {
            //     // setDone(false);
            //     // document.querySelector('html').style.overflow = 'auto';
            //     clearInterval(interval);
            // }, 3000);
        })
    };
    // useEffect(() => {
    //     // setLoading(true);
    //     // Define the headers with the selected language
    //     const headers = {
    //         lang: 'en', // Change language dynamically based on state
    //     };
    //     // Fetch data from the API with Axios
    //     axios.get('https://mzarapp.com/api/landing/home/packages'
    //         , {
    //             headers: headers,
    //         }).then(response => {
    //             setData(response.data);  // Set the response data to state
    //             setLoading(false);  // Set loading to false

    //         })
    //         .catch(error => {
    //             setError(error);  // Handle any errors
    //             console.error('Error fetching data:', error);
    //             setLoading(false)
    //         });
    // }, []);  // Run this effect whenever the `language` changes
    console.log(data);
    const router = useRouter()

    let setDone = props.setDone;
    console.log(props);
    // const [date, setDate] = React.useState<Date>()
    const [date, setDate] = useState(new Date());
    const [visited, setVisited] = useState(false);
    const [captchaa, setCaptchaa] = useState(false);
    function onChange(value) {
        setCaptchaa(true);
        console.log(captchaa);
    }
    const formSchema = z
        .object({

            name: z.string().min(1, { message: "Name is required" }).max(50, { message: "Name must be at most 50 characters" }),
            phone: z.string().refine(validator.isMobilePhone, { message: "Invalid phone number" }),
            comments: z.string().max(500, { message: "Comments must be at most 500 characters" }),
            destniation: z.string().min(1, { message: "Destniation is required" }),

        })
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            phone: '',
            comments: '',
            destniation: '',
            // captcha: '',
        },
    });
    const Submit = (data) => {
        setVisited(true);
        if (captchaa) {
            console.log("ffffffff");
            console.log(data);
            sendPostRequest(data);
        }
    };
    return (
        // loading ? <div className="w-full"><Loading /> </div> :
            <motion.div
                initial={{ opacity: 0, x: -300 }} // Initial animation state (faded and shifted left)
                whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
                viewport={{ once: true }}
                transition={{
                    delay: 0.2,
                    // type: 'spring', // Using spring animation for smooth motion
                    bounce: 0.2, // Small bounce effect for the animation
                }}
                className='w-full form'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(Submit)} >
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Initial animation state (faded and shifted left)
                            whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.3,
                                // type: 'spring', // Using spring animation for smooth motion
                                bounce: 0.2, // Small bounce effect for the animation
                            }}>
                            <FormField
                                control={form.control}
                                name="nameLabel"
                                className='w-full'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <FormLabel>الاسم كاملاً</FormLabel>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Initial animation state (faded and shifted left)
                            whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.3,
                                // type: 'spring', // Using spring animation for smooth motion
                                bounce: 0.2, // Small bounce effect for the animation
                            }}>
                            <FormField
                                control={form.control}
                                name="name"
                                className='w-full'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="اكتب اسمك كاملا"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className='form-message' />
                                    </FormItem>
                                )}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Initial animation state (faded and shifted left)
                            whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.4,
                                // type: 'spring', // Using spring animation for smooth motion
                                bounce: 0.2, // Small bounce effect for the animation
                            }}>
                            <FormField
                                className="w-full"
                                control={form.control}
                                name="phone" // Field for phone number
                                render={({ field }) => (
                                    <FormItem className={`w-full `}>
                                        <FormLabel className=''>رقم الجوال</FormLabel> {/* Label for phone number */}
                                        <FormControl className=''>
                                                <PhnoeInput initialValueFormat="national"
                                                    international
                                                    countryCallingCodeEditable={false}
                                                    defaultCountry="SA" // Setting the default country to Egypt
                                                    className="" onChange={field.onChange}
                                                />
                                        </FormControl>
                                        <FormMessage className='form-message' /> {/* Displaying validation messages */}
                                    </FormItem>
                                )}
                            />
                        </motion.div>
                        {/* <motion.div
                            initial={{ opacity: 0, x: 100 }} // Initial animation state (faded and shifted left)
                            whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.4,
                                // type: 'spring', // Using spring animation for smooth motion
                                bounce: 0.2, // Small bounce effect for the animation
                            }}>
                            <FormField
                                control={form.control}
                                name="phone"
                                className='w-full'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="اكتب رقمك هنا"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className='form-message' />
                                    </FormItem>
                                )}
                            />
                        </motion.div> */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Initial animation state (faded and shifted left)
                            whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.5,
                                // type: 'spring', // Using spring animation for smooth motion
                                bounce: 0.2, // Small bounce effect for the animation
                            }}>
                            <FormField
                                control={form.control}
                                name="whatsapp"
                                className='w-full'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <FormLabel>حجم القطاع </FormLabel>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Initial animation state (faded and shifted left)
                            whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.5,
                                // type: 'spring', // Using spring animation for smooth motion
                                bounce: 0.2, // Small bounce effect for the animation
                            }}>
                            <FormField
                                control={form.control}
                                name="destniation"
                                render={({ field }) => (
                                    <FormItem >
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl className="date-picker">
                                                <SelectTrigger className="w-full">
                                                    <FormLabel className="date-btn">
                                                        <SelectValue placeholder="اختر من القائمة" />
                                                    </FormLabel>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="small">شركة ناشئة</SelectItem>
                                                    <SelectItem value="mid">شركة متوسطة</SelectItem>
                                                    <SelectItem value="huge">شركة كبيرة</SelectItem>
                                                    <SelectItem value="global">شركة عالمية</SelectItem>

                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage className='form-message' />
                                    </FormItem>
                                )}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Initial animation state (faded and shifted left)
                            whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.6,
                                // type: 'spring', // Using spring animation for smooth motion
                                bounce: 0.2, // Small bounce effect for the animation
                            }}>
                            <FormField
                                control={form.control}
                                name="whatsapp"
                                className='w-full'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <FormLabel>ملاحظات (اختياري)</FormLabel>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Initial animation state (faded and shifted left)
                            whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.6,
                                // type: 'spring', // Using spring animation for smooth motion
                                bounce: 0.2, // Small bounce effect for the animation
                            }}>
                            <FormField
                                className=""
                                control={form.control}
                                name="comments"
                                render={({ field }) => (
                                    <FormItem className="">
                                        <FormControl>
                                            <Textarea
                                                type="textarea"
                                                {...field}
                                                placeholder={"اترك رسالة"}
                                                className=""
                                            />
                                        </FormControl>
                                        <FormMessage className="" />
                                    </FormItem>
                                )}
                            />
                        </motion.div>
                        <div className='captcha'>
                            <ReCAPTCHA sitekey="6Lc3A4oqAAAAALKG0Ww3vyaaIdmMWIAjXIi6xvoa" onChange={onChange} />
                            <p className={`${!captchaa && visited ? 'block' : 'hidden'} captcha-text`}>Please verify that you are not a robot</p>
                        </div>
                        <Button type="submit" className='text-xl py-4 rounded-xl min-w-32 h-13 submit '>Submit</Button>
                    </form>
                </Form>
            </motion.div>
    );
}
