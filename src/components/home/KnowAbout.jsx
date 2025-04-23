'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function KnowAbout() {

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
        <div className="about KnowAbout" id='about'>
            <div className="container m-auto">
                <h2>اعرف أكثر في 60 ثانية.</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/HLRJolV1xKQ?si=2O88owUsZN9nDM1O" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <Link href={`/about${gclid?`?gclid=${gclid}`:""}`} className="yellow-btn">اعرف عنا أكثر</Link>
            </div>
        </div>
    )
}
