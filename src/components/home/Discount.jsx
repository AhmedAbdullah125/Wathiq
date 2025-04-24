'use client'
import React , { Suspense, useEffect, useState } from 'react';
import bg from '/public/saudi.jpg'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Loading from '@/app/loading';



export default function DiscountWrapper() {
    return (
        <Suspense fallback={<Loading />}>
            <Discount />
        </Suspense>
    );
}

function Discount() { // Defining the main functional component named 'Footer'.
    const searchParams = useSearchParams();
    const [gclid, setGclid] = useState(null); // Store GCLID
    useEffect(() => {
        // Extract GCLID from the URL
        const gclidValue = searchParams.get('gclid');
        if (gclidValue) {
            setGclid(gclidValue);
        }
    }, [searchParams]);
    return (
        <div className="discount" style={{ backgroundImage: `url(${bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="overlay">
                <div className="container m-auto">
                    <div className="relat">
                        <span className='abs-span'>خصم </span>
                        <h2>اشترك، واحصل على خصم 20% عرض نهاية السنة.</h2>
                        <div className="links">
                            <Link href={`/book${gclid?`?gclid=${gclid}`:""}`} className='yellow-btn order'>طلب النظام </Link>
                            {/* <Link href="https://wa.me/+966551314455?text=Good%20Morning%20Wathiq" className='yellow-btn tagr'>اطلب نسختك التجريبيه</Link> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
