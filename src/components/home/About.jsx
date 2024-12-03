'use client'
import React from 'react';
import Image from 'next/image';
import icon1 from '/public/icon1.svg';
import icon2 from '/public/icon2.svg';
import icon3 from '/public/icon3.svg';
import icon4 from '/public/icon4.svg';
import { motion } from 'framer-motion';

export default function About() {
    let options = [
        {
            img: icon1,
            text: "الشفافية",
            p: 'لأننا نقدم حلاً متكاملاً وسلسًا يضمن الشفافية والأمان ويعمل بشكل مؤتمت وبدون تعقيد، على عكس الحلول التقليدية التي تتطلب جهدًا ووقتًا كبيرًا​'
        },
        {
            img: icon2,
            text: "الأمان",
            p: 'لأننا نقدم حلاً متكاملاً وسلسًا يضمن الشفافية والأمان ويعمل بشكل مؤتمت وبدون تعقيد، على عكس الحلول التقليدية التي تتطلب جهدًا ووقتًا كبيرًا​'
        },
        {
            img: icon3,
            text: "تكامل ",
            p: 'لأننا نقدم حلاً متكاملاً وسلسًا يضمن الشفافية والأمان ويعمل بشكل مؤتمت وبدون تعقيد، على عكس الحلول التقليدية التي تتطلب جهدًا ووقتًا كبيرًا​'
        },
        {
            img: icon4,
            text: "الأمان",
            p: 'لأننا نقدم حلاً متكاملاً وسلسًا يضمن الشفافية والأمان ويعمل بشكل مؤتمت وبدون تعقيد، على عكس الحلول التقليدية التي تتطلب جهدًا ووقتًا كبيرًا​'
        },
    ]
    return (
        <div className="about" >
            <div className="container m-auto">
                <h2>لماذا واثق؟</h2>
                <p>لأننا نقدم حلاً متكاملاً وسلسًا يضمن الشفافية والأمان ويعمل بشكل مؤتمت وبدون تعقيد، على عكس الحلول التقليدية التي تتطلب جهدًا ووقتًا كبيرًا​</p>
                <div className="options">
                    {
                        options.map((item, index) =>
                            <motion.div
                                initial={{  y: 100,opacity: 0, }}
                                whileInView={{  y: 0 ,opacity: 1,}}
                                transition={{
                                    type: 'spring',
                                    bounce: 0.5,
                                    duration: index*.5,
                                }}
                                viewport={{ once: true }} 
                                className="option" key={item.text}
                                >
                                <div className="img-cont">
                                    <Image src={item.img} width={200} height={200} alt="Mazar"></Image>
                                </div>
                                <div className="text">
                                    <h2>{item.text}</h2>
                                    <p>{item.p}</p>
                                </div>
                            </motion.div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
