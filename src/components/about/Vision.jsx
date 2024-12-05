'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import img from '/public/vision/01.png'
import img2 from '/public/vision/02.png'
import bg from '/public/about-bg.jpg'

export default function Book() {

    return (
            <section
                className="vision-section"
                style={{backgroundImage: `url(${bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
            >
                <div className="container m-auto">
                    <div className="vision-cont">
                        <div className="vision-item">
                            <div className="vision-content">
                                <h3>روئيتنا :</h3>
                                <p>
                                    نسعى إلى أن تكون منصة واثق® المنصة الأذكى لإدارة عمليات النقل
                                    البري للمواد البترولية وحفظ الحمولة من التلاعب.
                                </p>
                            </div>
                            <div className="vision-img-cont">
                                <div className="vision-img">
                                    <figure>
                                        <Image  src={img} alt="vision" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="vision-item">
                            <div className="vision-content">
                                <h3>رسالتنا :</h3>
                                <p>
                                    نسعى إلى أن تكون منصة واثق® الوسيلة الأولى والتي تتجاوز توقعات
                                    عملائنا من خلال تقديم تجربة سلسة تتمحور حول أتمتة وإدارة عمليات
                                    النقل البري للمواد البترولية وحفظ الحمولة من التلاعب، وتعزيز
                                    الشفافية بين أصحاب العلاقة، ورفع مستوى الأمان والسلامة لعمليات
                                    النقل.
                                </p>
                            </div>
                            <div className="vision-img-cont">
                                <div className="vision-img">
                                    <figure>
                                        <Image  src={img2} alt="vision" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}
