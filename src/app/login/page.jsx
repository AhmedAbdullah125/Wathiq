'use client'
import React, { useState } from 'react';
import bg from '/public/bg.webp';
import Image from 'next/image';
import Choose from '../../components/login/Choose';
import { useRouter } from 'next/navigation';
export default function Book() {
 
  
  return (
    <div className='book-main-page' style={{ backgroundImage: `url(${bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className="overlay">      
        <div className="container m-auto">
          <div className="book-cont user-cont">
            <Choose/>
          </div>
        </div>
      </div>
    </div>
  );
}
