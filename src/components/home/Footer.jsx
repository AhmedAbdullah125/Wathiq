'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'; // Importing React to use JSX syntax and create components.
import { motion } from 'framer-motion';
import logo from '/public/logo.svg'



export default function Footer() { // Defining the main functional component named 'Footer'.

    return (
        <footer > {/* Main footer container with padding and background color */}
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
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                        <Link href="/" className='login-btn'>تسجيل الدخول</Link>
                    </div>

                </div>
            </div>
        </footer>
    )
}
