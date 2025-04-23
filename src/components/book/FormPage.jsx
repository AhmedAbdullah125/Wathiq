'use client'
import React, { useEffect, useState } from 'react';
import { Input } from '../ui/input';
import ReCAPTCHA from "react-google-recaptcha"
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import validator from "validator";
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import PhnoeInput from 'react-phone-number-input'; // Importing a phone number input component.
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from '@/components/ui/form';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from '@/components/ui/select';
import { motion } from 'framer-motion'; // Importing the motion component from Framer Motion for animations
import axios from 'axios';
import { Textarea } from '../ui/textarea';
export default function FormPage() {
    const searchParams = useSearchParams();
    const [gclid, setGclid] = useState(null); // Store GCLID
    useEffect(() => {
        // Extract GCLID from the URL
        const gclidValue = searchParams.get('gclid');
        if (gclidValue) {
            setGclid(gclidValue);
        }

    }, [searchParams]);
    console.log(gclid);
    const sendPostRequest = async (data) => {
        const url = 'https://dev.wathiq.io/api/place-order';
        const queryParams = {
            customer_name: data?.name,
            customer_mobile: data?.phone,
            customer_organization_size: data.destniation,
            customer_notes: data.comments,
            customer_email: data?.email,
            gclid: gclid
        };
        return axios({
            method: 'post',
            url: url,
            data: queryParams,
            headers: {
                lang: 'en',
            },
        }).then(response => {
            router.push(`/congats?name=${data?.name}&phone=${data?.phone}&email=${data?.email}&size=${data?.destniation}`);           
        })
    };
   
    const router = useRouter()
    const [date, setDate] = useState(new Date());
    const [visited, setVisited] = useState(false);
    const [captchaa, setCaptchaa] = useState(false);
    function onChange(value) {
        setCaptchaa(true);
    }
    const formSchema = z
        .object({

            name: z.string().min(1, { message: "Name is required" }).max(50, { message: "Name must be at most 50 characters" }),
            phone: z.string().refine(validator.isMobilePhone, { message: "Invalid phone number" }),
            email: z.string().email({ message: "Invalid email" }),
            comments: z.string().max(500, { message: "Comments must be at most 500 characters" }),
            destniation: z.string().min(1, { message: "Destniation is required" }),

        })
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            comments: '',
            destniation: '',
        },
    });
    const Submit = (data) => {
        setVisited(true);
        if (captchaa) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'form_submission',
                customer_name: data.name,
                customer_phone: data.phone,
                customer_email: data.email,
                customer_organization_size: data.destniation,
                gclid: gclid // Pass GCLID here
            });

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
                                        <FormLabel>الايميل</FormLabel>
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
                            name="email"
                            className='w-full'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="اكتب الايميل هنا"
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
