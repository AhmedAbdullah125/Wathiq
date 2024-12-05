'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import part1 from '/public/1.png';
import part2 from '/public/2.png';
import part3 from '/public/3.png';
import part4 from '/public/4.png';
import part5 from '/public/5.png';
import part6 from '/public/6.png';
import part7 from '/public/7.png';
import NumberTicker from '../ui/number-ticker';

export default function Parteners() {
    let parts = [part1, part2, part3, part4, part5, part6, part7];
    let numbers = [
        { name: "وفرنا", number: 500000, p: "ريال سعودي لكل عميل في منتج واحد" },
        { name: "أنجزنا", number: 12000, p: "رحله عبر النظام" },
        { name: "نقلنا", number: 430, p: "مليون لتر" },
        { name: "استخدمنا", number: 40000, p: "قفلا مخصصا" },
    ]
    return (
        <div className="parteners" >
            <div className="container  m-auto" >
                <div className="parts-cont">
                    <h3>انضم لشركاء النجاح</h3>
                    <div className="partss">
                        {
                            parts.map((item, index) =>
                                <div className="part" key={index}>
                                    <Image src={item} alt="Mazar" width={200} height={200} />
                                </div>
                            )
                        }
                    </div>

                </div>
                <div className="nums">
                    <h3> أرقام واثق</h3>
                    <div className="numbers-cont">
                        {
                            numbers.map((item, index) =>
                                <motion.div
                                    initial={{ y: 100, opacity: 0, }}
                                    whileInView={{ y: 0, opacity: 1, }}
                                    transition={{
                                        type: 'spring',
                                        bounce: 0.5,
                                        duration: index * .5,
                                    }}
                                    viewport={{ once: true }
                                    }
                                    className="number" key={index}>
                                    <h2>{item.name}</h2>
                                    <div className="needed">
                                    <NumberTicker value={item.number} /> +
                                    </div>
                                    <p>{item.p}</p>
                                </motion.div>
                            )
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
