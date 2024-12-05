'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import icon from '/public/Icon.png'
import img3 from '/public/values-img.png'
import img4 from '/public/values-i1.png'
import img5 from '/public/values-i2.png'

export default function Book() {

    return (
        <section className="values-section">
            <div className="container m-auto">
                <h3 className="values-title">قيمنا:</h3>
                <div className="about-goals-cont">
                    <div className="about-goals-item">
                        <figure>
                            <Image src={icon} alt="icon" />
                        </figure>
                        <p>الجودة والتميز. </p>
                    </div>
                    <div className="about-goals-item">
                        <figure>
                            <Image src={icon} alt="icon" />
                        </figure>
                        <p>الشفافية والمصداقية. </p>
                    </div>
                    <div className="about-goals-item">
                        <figure>
                            <Image src={icon} alt="icon" />
                        </figure>
                        <p>الأمانة والإتقان. </p>
                    </div>
                    <div className="about-goals-item">
                        <figure>
                            <Image src={icon} alt="icon" />
                        </figure>
                        <p>التطور المستمر. </p>
                    </div>
                </div>
                <div className="values-cont">
                    <div className="values-content">
                        <h4 className="values-head">كلمه الرئيس التنفيذي</h4>
                        <p className="values-pargh">
                            لأننا نقدم حلاً متكاملاً وسلسًا يضمن الشفافية والأمان ويعمل بشكل
                            مؤتمت وبدون تعقيد، على عكس الحلول التقليدية التي تتطلب جهدًا
                            ووقتًا كبيرًا​.<br />
                            لأننا نقدم حلاً متكاملاً وسلسًا يضمن الشفافية والأمان ويعمل بشكل
                            مؤتمت وبدون تعقيد، على عكس الحلول التقليدية التي تتطلب جهدًا
                            ووقتًا كبيرًا​.
                        </p>
                    </div>
                    <div className="values-img-cont">
                        <figure><Image src={img3} alt="img" /></figure>
                        <Image src={img4} alt="" className="values-i1" />
                        <Image src={img5} alt="" className="values-i2" />
                    </div>
                </div>
            </div>
        </section>
    );
}
