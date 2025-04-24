'use client'
import Image from 'next/image';
import Link from 'next/link';
import React , { Suspense, useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import logo from '/public/logo2.svg'
import SaudiTech from '../../../public/SaudiTech.png'
import { useSearchParams } from 'next/navigation';
import Loading from '@/app/loading';

export default function Footer() {
    return (
        <Suspense fallback={<Loading />}>
            <FooterWrapper />
        </Suspense>
    );
}

function FooterWrapper() { // Defining the main functional component named 'Footer'.
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
        <footer id='footer'> {/* Main footer container with padding and background color */}
            <Link href={`https://wa.me/+966551314455?text=Good%20Morning%20Wathiq` + (gclid ? ` number ${gclid}` : '')} target="_blank" className="fixed-what">
                <i className="fa-brands fa-whatsapp"></i>
            </Link>
            <div className="container m-auto">
                <div className="content">
                    <div className="logo">
                        <Image src={logo} alt="Wathiq" />
                        <Image src={SaudiTech} alt="Wathiq" />
                    </div>
                    <div className="links">
                        <h3>روابط سريعة</h3>
                        <ul>
                            <li><Link href="/">الرئيسية</Link></li>
                            <li><Link href="/about">عن واثق</Link></li>
                            <li><Link href="/#footer">تواصل معنا</Link></li>
                        </ul>
                    </div>
                    <div className="links">
                        <h3>تواصل معنا</h3>
                        <ul>
                            <li><Link href="#">المملكة العربية السعودية, جدة, حي الشرفية شارع أبو بكر الصديق</Link></li>
                            <li><Link href="tel:+966551314455" className='ltr'>966551314455+</Link></li>
                            <li><Link href="mailto:wathiq@alalaa.co">wathiq@alalaa.co</Link></li>
                        </ul>
                    </div>
                    <div className="links">
                        <h3>تابعنا علي مواقع التواصل</h3>
                        <div className="social">
                            <Link href="https://www.instagram.com/wathiqtms/"><i className="fa-brands fa-instagram"></i></Link>
                            <Link href="https://www.linkedin.com/company/wathiqtms/"><i className="fa-brands fa-linkedin"></i></Link>
                            <Link href="https://x.com/WathiqTMS"><i className="fa-brands fa-x-twitter"></i></Link>
                            <Link href="https://www.youtube.com/@WathiqTMS"><i className="fa-brands fa-youtube"></i></Link>

                        </div>
                        <Link href="/login" className='login-btn'>تسجيل الدخول</Link>
                    </div>
                </div>
                <div className="served">
                    © 2024, كل الحقوق محفوظه ل واثق
                </div>
            </div>
        </footer>
    )
}
