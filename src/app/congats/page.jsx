'use client'
import React, { Suspense, useEffect } from 'react';
import doneImage from '/public/done.svg';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Loading from '../loading';
export default function bookWrapper() {
    <Suspense fallback={<Loading />}>
        <Book />
    </Suspense>
}

function Book() {
    const searchParams = useSearchParams();  // Fixed variable name
    const name = searchParams.get('name');
    const phone = searchParams.get('phone');
    const emil = searchParams.get('email');
    const size = searchParams.get('size');

    useEffect(() => {
        // Ensure window object is available before accessing dataLayer
        if (typeof window !== "undefined") {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'form_submission',
                customer_name: name,
                customer_phone: phone,
                customer_organization_size: size,
                customer_email: emil
            });
        }
    }, [name, phone, size, emil]); // Added dependency array


    return (
        <div className="popup" >
            <div className="popup-cont">
                <Image src={doneImage} alt="Wathiq" className="img" />
                <h2>مرحبا {name} </h2>
                <p>تم استلام طلبك بنجاح ، سيتم التواصل معك قريبا</p>
            </div>
        </div>
    );
}
