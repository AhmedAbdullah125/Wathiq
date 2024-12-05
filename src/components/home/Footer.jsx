'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'; // Importing React to use JSX syntax and create components.
import { motion } from 'framer-motion';
import logo from '/public/logo2.svg'



export default function Footer() { // Defining the main functional component named 'Footer'.

    return (
        <footer id='footer'> {/* Main footer container with padding and background color */}
            <a href="https://wa.me/+966551314455?text=Good%20Morning%20Wathiq" className="fixed-what">
                <i className="fa-brands fa-whatsapp"></i>
            </a>
            <div className="container m-auto">
                <div className="content">
                    <div className="logo">
                        <Image src={logo} alt="logo" />
                    </div>
                    <div className="links">
                        <h3>روابط سريعة</h3>
                        <ul>
                            <li><a href="#">الرئيسية</a></li>
                            <li><a href="#">عن واثق</a></li>
                            <li><a href="#">المدونات</a></li>
                            <li><a href="#">تواصل معنا</a></li>
                        </ul>
                    </div>
                    <div className="links">
                        <h3>تواصل معنا</h3>
                        <ul>
                            <li><a href="#">المملكة العربية السعودية, جدة, حي الشرفية شارع أبو بكر الصديق</a></li>
                            <li><a href="#">+966 55 555 5555</a></li>
                            <li><a href="#">email@email.com</a></li>
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
                        <Link href="/" className='login-btn'>تسجيل الدخول</Link>
                    </div>
                </div>
                <div className="served">
                © 2024, كل الحقوق محفوظه ل واثق
                </div>
            </div>
        </footer>
    )
}
