'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function KnowAbout() {
    
    return (
        <div className="about KnowAbout" id='about'>
            <div className="container m-auto">
                <h2>أعرف عنا اكثر في 60 ثانيه!</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/HLRJolV1xKQ?si=2O88owUsZN9nDM1O" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <Link href="/about" className="yellow-btn">اعرف عنا اكثر</Link>
            </div>
        </div>
    )
}
