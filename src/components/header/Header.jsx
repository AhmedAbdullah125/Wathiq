'use client';
import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/home/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function Header() {
  const router = useRouter()
  let [lang, setLang] = useState('en');
  function handleClose(){
    document.querySelector('html').style.overflowY = 'unset';
    document.querySelector('.side-menu').classList.toggle('side-menu-active')
    document.querySelector('.menu-bars').classList.toggle('hidden')
    document.querySelector('.menu-bars-X').classList.toggle('hidden')
    document.querySelector('.X-overlay').classList.toggle('hidden')
  }

  return (
    <>
      <header className="header">
        <div className="X-overlay hidden" onClick={handleClose}></div>
        <div className="container m-auto flex items-center gap-2 justify-between">
          <Link href="/"> <Image src={logo} alt="logo" className="logo-img" /></Link>
          <div className="links">
            <Link href="/">الرئيسية</Link>
            <Link href="/about">عن واثق</Link>
            <Link href="/#footer">تواصل معنا</Link>
            <Link href="/book" className='book-link' >طلب النظام</Link>
          </div>


          <Menu className='menu-bars' onClick={() => {
            document.querySelector('html').style.overflowY = 'hidden';
            document.querySelector('.side-menu').classList.toggle('side-menu-active')
            document.querySelector('.menu-bars').classList.toggle('hidden')
            document.querySelector('.menu-bars-X').classList.toggle('hidden')
            document.querySelector('.X-overlay').classList.toggle('hidden')
          }} />
          <X className='menu-bars-X hidden' onClick={handleClose} />
          <div className="side-menu" onClick={handleClose}>
            <div className="links" onClick={handleClose} >
              <Link href="/" onClick={handleClose}>الرئيسية</Link>
              <Link href="/about" onClick={handleClose}>عن واثق</Link>
              <Link href="/#footer" onClick={handleClose}>تواصل معنا</Link>
              <Link href="/book" className='book-link'onClick={handleClose} >طلب النظام</Link>
            </div>
          </div>
        </div>
      </header>
      <div className="offer-header">
        <div className="offer-text">
          <p>اشترك، واحصل على خصم 20% عرض نهاية السنة.</p>
          <X size={28} className='shrink-0' onClick={() => {
            document.querySelector('.offer-header').classList.toggle('hidden')

          }} />
        </div>
      </div>
    </>
  );
}