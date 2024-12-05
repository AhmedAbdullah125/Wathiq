'use client'
import React, { useState } from 'react';
import doneImage from '/public/done.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Book() {
    const router = useRouter()
    
    return (
        <div className="popup" >
            <div className="popup-cont">
                <Image src={doneImage} alt="Mazar" className="img" />
                <h2>Welcome to Mzar </h2>
                <p>Our team will contact you shortly on WhatsApp to guide you through the next steps of your journey. We look forward to assisting you!</p>
            </div>
        </div>
    );
}
