'use client'
import React from 'react';

import Image from 'next/image';
import bg from '/public/HeroBg.jpg'
import tab from '/public/tab.png'
import mobile from '/public/mobile.svg'
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <div className="hero" style={{ backgroundImage: `url(${bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="overlay">
                <div className="heading">
                    <h1>كن واثقا مع واثق </h1>
                    <p>راقب نقل المنتجات البترولية واضمن  وصولها بنفس الجودة والكمية</p>
                    <div className="links">
                        <Link href="/login" className='main-link' >اطلب نسختك التجريبيه </Link>
                        <Link href="/book" className='sec-link' >جرب النظام مجانا</Link>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: .9,
                    }}
                    viewport={{ once: true }
                    }
                    className="mob-tab">
                    <Image src={mobile} alt="Wathiq" className="mobile" />
                    <Image src={tab} alt="Wathiq" className="tab" />
                    <div className="gradiant"></div>
                </motion.div>
            </div>
        </div>
    )
}
