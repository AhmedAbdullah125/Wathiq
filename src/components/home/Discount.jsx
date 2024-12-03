import React from 'react';
import Image from 'next/image';
import bg from '/public/saudi.jpg'
import Link from 'next/link';
export default function Discount() { // Defining the main functional component named 'Footer'.

    return (
        <div className="discount" style={{ backgroundImage: `url(${bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="overlay">
                <div className="container m-auto">
                    <div className="relat">
                        <span className='abs-span'>خصم </span>
                        <h2>سارع بأخذ خصم اليوم الوطني السعودي</h2>
                        <p>لأننا نقدم حلاً متكاملاً وسلسًا يضمن الشفافية والأمان ويعمل بشكل مؤتمت وبدون تعقيد، على عكس الحلول التقليدية التي تتطلب جهدًا ووقتًا كبيرًا​</p>
                        <div className="links">
                            <Link href="#" className='yellow-btn order'>طلب النظام </Link>
                            <Link href="#" className='yellow-btn tagr'>اطلب نسختك التجريبيه</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
